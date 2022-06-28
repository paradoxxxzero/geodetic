export const xy = (x, y) => [x, y, Math.sqrt(x * x + y * y + 1)]

// x² + y² - z² = -1

export const box = (center, width, height, color) => {
  const w2 = width / 2
  const h2 = height / 2

  return {
    points: [
      hyperbolicTranslate(xy(-w2, h2), center),
      hyperbolicTranslate(xy(w2, h2), center),
      hyperbolicTranslate(xy(w2, -h2), center),
      hyperbolicTranslate(xy(-w2, -h2), center),
    ],
    color,
  }
}

export const hyperbolicTranslate = (vertex, offset) => {
  const [xe, ye, ze] = vertex
  const [xt, yt] = offset

  const cxt = Math.sqrt(1 + xt * xt) // Math.cosh(Math.asinh(xt))
  const cyt = Math.sqrt(1 + yt * yt) // Math.cosh(Math.asinh(yt))
  const a = xe
  const b = ye * yt + ze * cyt
  vertex[0] = a * cxt - b * xt
  vertex[1] = ye * cyt + ze * yt
  vertex[2] = -a * xt + b * cxt
  return vertex
}
