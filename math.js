export const xy = ([x, y]) => [x, y, Math.sqrt(x * x + y * y + 1)]

// x² + y² - z² = -1
export const normalize = ([x, y, z]) => {
  let nr = -x * x - y * y + z * z
  if (nr === 0) {
    return [0, 0, 1]
  } else if (nr < 0) {
    nr *= -1
  }
  const k = (Math.sign(z) || 1) / Math.sqrt(nr)
  return [x * k, y * k, z * k]
}

const ht = (v, [x, y, z]) => {
  return hyperbolicTranslate(hyperbolicTranslate(v, [-x, 0]), [
    0,
    y * Math.tanh(1 / Math.abs(x)),
  ])
}
// const trres = 30
// const ht = (v, [x, y, z]) => {
//   const r =
//     euclidianDistance([0, 0], [x, y]) / hyperbolicDistance([0, 0], [x, y]) || 1
//   console.log(r)
//   x = x * 0.5
//   y = y
//   for (let i = 0; i < trres; i++) {
//     hyperbolicTranslate(v, [-x / trres, y / trres])
//   }
//   return v
// }
const euclidianTranslate = ([x1, y1], [x2, y2]) => xy([x2 - x1, y2 - y1])

export const box = (center, width, height, color) => {
  const w2 = width / 2
  const h2 = height / 2

  // center = xy(euclidianTranslate([0, 0], center))

  return {
    points: [
      ht(xy([-w2, h2]), center),
      ht(xy([w2, h2]), center),
      ht(xy([w2, -h2]), center),
      ht(xy([-w2, -h2]), center),
    ],
    center: ht(xy([0, 0]), center),
    color,
  }
}
export const hyperbolicDistance = ([x1, y1], [x2, y2]) =>
  Math.acosh(
    Math.cosh(y1) * Math.cosh(x2 - x1) * Math.cosh(y2) -
      Math.sinh(y1) * Math.sinh(y2)
  )
window.hyperbolicDistance = hyperbolicDistance
export const euclidianDistance = ([x1, y1], [x2, y2]) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
window.euclidianDistance = euclidianDistance

export const hyperbolicTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset

  const cxt = Math.cosh(Math.asinh(xt))
  const cyt = Math.cosh(Math.asinh(yt))
  const a = xe
  const b = ye * yt + ze * cyt
  vertex[0] = a * cxt - b * xt
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = -a * xt + b * cxt
  return vertex
}

export const dot = ([xa, ya, za], [xb, yb, zb]) => xa * xb + ya * yb - za * zb
const t2s = (t, uv) => Math.sqrt(t * t * (uv * uv - 1) + 1) + uv * t

export const curve = (u, v, curveStep) => {
  const vertices = [u]
  const uv = dot(u, v)
  for (let t = 1 - curveStep; t > 0; t -= curveStep) {
    const s = t2s(t, uv)
    vertices.push([
      u[0] * t + v[0] * s,
      u[1] * t + v[1] * s,
      u[2] * t + v[2] * s,
    ])
  }
  vertices.push(v)
  return vertices
}

export const fromPoincare = ([x, y]) => {
  const s = Math.min(0.999, x * x + y * y)
  const nr = 1 / (1 - s)
  return [2 * x * nr, 2 * y * nr, (1 + s) * nr]
}

export const project = ([x, y, z]) => [x / (1 + z), y / (1 + z)]

window.hyperbolicTranslate = hyperbolicTranslate
window.euclidianTranslate = euclidianTranslate
window.project = project
window.ht = ht
window.xy = xy
