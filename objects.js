import { xy } from './math'

// const debugBoxes = []
// const s = 4
// for (let i = -s; i <= s; i++) {
//   for (let j = -s; j <= s; j++) {
//     debugBoxes.push({
//       text: `${i}x${j}`,
//       center: xy([i, j]),
//       color: [(i + s) / (2 * s), (j + s) / (2 * s), Math.abs(i * j) / (s * s)],
//     })
//   }
// }
// export const boxes = debugBoxes
export const boxes = [
  { text: '00', center: xy([0, 0]), color: [0.5, 0.75, 0] },
  { text: '25', center: xy([0.25, 0.25]), color: [0.5, 0.75, 0] },
  { text: '55', center: xy([-0.5, 0.5]), color: [0.5, 0.75, 0] },
  { text: '75', center: xy([0.75, -0.75]), color: [0.5, 0.75, 0] },
  { text: '99', center: xy([-0.999, -0.999]), color: [0.5, 0.75, 0] },
  // { text: 'Foo', center: xy([0.4, 0.9]), color: [0.15, 0.5, 0.6] },
  // { text: 'Bar', center: xy([1, -1.5]), color: [0.8, 0.5, 0.2] },
  // { text: 'Hello World', center: xy([-2, -2]), color: [0.5, 0, 0.9] },
  // { text: '—<>[]^±−÷×', center: xy([-2, 5]), color: [0.5, 0.7, 0.9] },
]

export const links = [
  { boxes: [boxes[0], boxes[1]] },
  { boxes: [boxes[2], boxes[4]] },
  { boxes: [boxes[3], boxes[1]] },
]

window.boxes = boxes
window.links = links
