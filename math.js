export let curvature = -1
export const setCurvature = c => {
  curvature = c
}
// x² + y² - z² = -1
// z = 1
// x² + y² + z² = 1

export const xy = ([x, y]) => [
  x,
  y,
  curvature < 0
    ? Math.sqrt(x * x + y * y + 1)
    : curvature > 0
    ? Math.sqrt(Math.abs(1 - x * x - y * y))
    : 1,
]

export const curvatureTranslate = (vertex, offset) => {
  curvature < 0
    ? hyperbolicTranslate(vertex, offset)
    : curvature > 0
    ? ellipticTranslate(vertex, offset)
    : parabolicTranslate(vertex, offset)
  return vertex
}

export const box = (center, width, height, color) => {
  const w2 = width / 2
  const h2 = height / 2

  return {
    points: [
      curvatureTranslate(xy([-w2, h2]), center),
      curvatureTranslate(xy([w2, h2]), center),
      curvatureTranslate(xy([w2, -h2]), center),
      curvatureTranslate(xy([-w2, -h2]), center),
    ],
    color,
  }
}

// export const hyperbolicDistance = ([x1, y1], [x2, y2]) =>
//   Math.acosh(
//     Math.cosh(y1) * Math.cosh(x2 - x1) * Math.cosh(y2) -
//       Math.sinh(y1) * Math.sinh(y2)
//   )
// export const euclidianDistance = ([x1, y1], [x2, y2]) =>
//   Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

export const hyperbolicTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  let [xt, yt] = offset
  xt *= Math.tanh(1 / Math.abs(yt))

  const cxt = Math.cosh(Math.asinh(xt))
  const cyt = Math.cosh(Math.asinh(yt))
  const a = xe
  const b = ye * yt + ze * cyt

  vertex[0] = a * cxt - b * xt
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = -a * xt + b * cxt

  return vertex
}

const ellipticTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset
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

  vertex[0] = xe - xt
  vertex[1] = ye + yt
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
