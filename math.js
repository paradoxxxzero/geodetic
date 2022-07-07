export let curvature = 1

export const setCurvature = c => {
  curvature = c
}
// x² + y² - z² = -1
// z = 1
// x² + y² + z² = 1

const project = ([x, y, z]) => {
  const nr = 2 / (1 + z)
  return [x * nr, y * nr]
}

const unproject = ([x, y]) => {
  x *= 0.5
  y *= 0.5
  const nr = 2 / (1 + x * x + y * y)
  return [-x * nr, y * nr, nr - 1]
}

export const xy = ([x, y]) =>
  curvature > 0
    ? unproject([x, y])
    : curvatureTranslate(
        [0, 0, 1],
        [-x, y, curvature < 0 ? Math.sqrt(x * x + y * y + 1) : 1]
      )

export const normalize = ([x, y, z], c = curvature) => {
  if (c === 0) {
    return [x / z, y / z, 1]
  }
  let nr = c * x * x + c * y * y + z * z
  if (nr === 0) {
    return [0, 0, 1]
  }
  if (c < 0 && nr < 0) {
    // This is not necessary but prevent some crashes when normalizing wythoff
    nr *= -1
  }
  const k = (c === -1 ? Math.sign(z) || 1 : 1) / Math.sqrt(nr)
  return [x * k, y * k, z * k]
}

// export const curvatureTranslate = (vertex, offset) => {
//   for (let i = 0; i < 100; i++) {
//     _curvatureTranslate(vertex, [offset[0] / 100, offset[1] / 100])
//   }
//   return vertex
// }

export const curvatureRotate = (vertex, offset) => {
  curvature < 0
    ? hyperbolicRotate(vertex, offset)
    : curvature > 0
    ? ellipticRotate(vertex, offset)
    : parabolicTranslate(vertex, offset)
  return vertex
}

export const curvatureTranslate = (vertex, offset) => {
  curvature < 0
    ? hyperbolicTranslate(vertex, offset)
    : curvature > 0
    ? ellipticTranslate(vertex, offset)
    : parabolicTranslate(vertex, offset)
  return vertex
}

export const getPoints = (center, width, height) => {
  const w2 = (-curvature * width) / 2
  const h2 = (-curvature * height) / 2

  return [
    curvatureTranslate(xy([w2, h2]), center),
    curvatureTranslate(xy([w2, -h2]), center),
    curvatureTranslate(xy([-w2, -h2]), center),
    curvatureTranslate(xy([-w2, h2]), center),
  ]
}

// export const hyperbolicDistance = ([x1, y1], [x2, y2]) =>
//   Math.acosh(
//     Math.cosh(y1) * Math.cosh(x2 - x1) * Math.cosh(y2) -
//       Math.sinh(y1) * Math.sinh(y2)
//   )
// export const euclidianDistance = ([x1, y1], [x2, y2]) =>
//   Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

export const cross = ([x1, y1, z1], [x2, y2, z2]) => {
  return [y1 * z2 - y2 * z1, z1 * x2 - z2 * x1, x1 * y2 - x2 * y1]
}

export const hyperbolicTranslate = (vertex, offset) => {
  if (offset[0] === 0 && offset[1] === 0) {
    return vertex
  }
  const o = [0, 0, 1]

  const tp1 = [offset[0], offset[1], offset[2] + 1]
  const tx1 = cross(offset, o)
  tx1[2] *= -1

  const b = cross(tp1, tx1)

  // reflect across bisector
  const k = (2 * dot(vertex, b)) / dot(b, b)
  vertex[0] -= k * b[0]
  vertex[1] -= k * b[1]
  vertex[2] -= k * b[2]

  // reflect direction of t
  const n = [offset[0], offset[1], 0]
  const l = (2 * dot(n, [vertex[0], vertex[1], 0])) / dot(n, n)

  vertex[0] -= l * n[0]
  vertex[1] -= l * n[1]

  return vertex
}

export const ellipticTranslate = (vertex, offset) => {
  if (offset[0] === 0 && offset[1] === 0) {
    vertex[0] *= -1
    vertex[1] *= -1
    return vertex
  }
  const o = [0, 0, 1]

  const tp1 = [offset[0], offset[1], offset[2] + 1]
  const tx1 = cross(offset, o)

  const b = cross(tp1, tx1)

  // reflect across bisector
  const k = (2 * dot(vertex, b)) / dot(b, b)
  vertex[0] -= k * b[0]
  vertex[1] -= k * b[1]
  vertex[2] -= k * b[2]

  // reflect direction of t
  const n = [offset[0], offset[1], 0]
  const l = (2 * dot(n, [vertex[0], vertex[1], 0])) / dot(n, n)

  vertex[0] -= l * n[0]
  vertex[1] -= l * n[1]

  vertex[0] *= -1
  vertex[1] *= -1
  return vertex
}

export const hyperbolicRotate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  let [xt, yt] = offset
  xt *= -Math.tanh(1 / Math.abs(yt))
  // xt *= -1

  const cxt = Math.sqrt(1 + xt * xt) // Math.cosh(Math.asinh(xt))
  const cyt = Math.sqrt(1 + yt * yt) // Math.cosh(Math.asinh(yt))
  const a = xe
  const b = ye * yt + ze * cyt

  vertex[0] = a * cxt - b * xt
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = -a * xt + b * cxt

  return vertex
}

const ellipticRotate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  let [xt, yt] = offset
  yt *= -1
  // xt *= 1.3333
  // xt *= Math.tan(1 / yt)
  // yt *= Math.tan(1 / xt)

  // xt *= yt //Math.tan(yt * yt * yt)
  // yt *= -Math.tan(1 / xt)
  // const xs = Math.abs(xt) > 1 ? -1 : 1
  // const ys = Math.abs(yt) > 1 ? -1 : 1

  // xt = ((xt + 1) % 2) - 1
  // yt = ((yt + 1) % 2) - 1

  const cxt = Math.sqrt(1 - xt * xt) // Math.cos(Math.asin(xt))
  const cyt = Math.sqrt(1 - yt * yt) // Math.cos(Math.asin(yt))
  const a = xe
  const b = ye * yt + ze * cyt
  vertex[0] = a * cxt + b * xt
  vertex[1] = ye * cyt - ze * yt
  vertex[2] = -a * xt + b * cxt
}

const parabolicTranslate = (vertex, offset) => {
  let [xe, ye] = vertex
  const [xt, yt] = offset

  vertex[0] = xe + xt
  vertex[1] = ye + yt
  vertex[2] = 1
}

export const dot = ([xa, ya, za], [xb, yb, zb], c = curvature) =>
  xa * xb + ya * yb + c * za * zb

const t2s = (t, uv) => Math.sqrt(t * t * (uv * uv - 1) + 1) - curvature * uv * t

export const curve = (u, v, curveStep) => {
  const vertices = [u]
  if (curvature) {
    const uv = dot(u, v)
    for (let t = 1 - curveStep; t > 0; t -= curveStep) {
      const s = t2s(t, uv)
      vertices.push([
        u[0] * t + v[0] * s,
        u[1] * t + v[1] * s,
        u[2] * t + v[2] * s,
      ])
    }
  }
  vertices.push(v)
  return vertices
}

// export const project = ([x, y, z]) => [x / (1 + z), y / (1 + z)]
window.project = project
window.unproject = unproject
// window.normalize = normalize
window.curvatureTranslate = curvatureTranslate
