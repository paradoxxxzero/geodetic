import { createBox, updateBox } from './box'
import { interactions } from './interact'
import { createLink, updateLink } from './link'
import { xy } from './math'
import { initialize3d } from './render'
import './style.css'
import { makeSurface } from './surface'

const { scene, camera, controls, raycaster, renderer } = initialize3d()
const surface = makeSurface()
surface.scale.set(0.99, 0.99)
// scene.add(surface)

const boxes = [
  { text: 'LqgL', center: xy([0, 0]), color: [0.5, 0.75, 0] },
  { text: 'Foo', center: xy([0.4, 2]), color: [0.15, 0.5, 0.6] },
  { text: 'Bar', center: xy([1, -1.5]), color: [0.8, 0.5, 0.2] },
  { text: 'Hello World', center: xy([-2, -2]), color: [0.5, 0, 0.9] },
  { text: '—<>[]^±−÷×', center: xy([-2, 5]), color: [0.5, 0.7, 0.9] },
]

const links = [
  { boxes: [boxes[0], boxes[1]] },
  { boxes: [boxes[2], boxes[4]] },
  { boxes: [boxes[3], boxes[1]] },
]

// const boxres = 100
// const boxresq = Math.floor(Math.sqrt(boxres))
// const boxes = new Array(boxres)
//   .fill(0)
//   .map((_, i) =>
//     box(
//       xy([
//         boxresq / 2 - Math.floor(i / boxresq),
//         boxresq / 2 - Math.floor(i % boxresq),
//       ]),
//       0.25,
//       0.25,
//       [
//         Math.floor(i % boxresq) / boxresq,
//         Math.floor(i / boxresq) / boxresq,
//         i / boxres,
//       ]
//     )
//   )

boxes.forEach(box => {
  createBox(box)
  scene.add(box.mesh)
  scene.add(box.line)
})

links.forEach(link => {
  createLink(link)
  scene.add(link.line)
})

const update = () => {
  boxes.forEach(updateBox)
  links.forEach(updateLink)
}

const render = () => {
  update()
  renderer.render(scene, camera)
}

// renderer.setAnimationLoop(() => {
//   render()
// })

const size = () => {
  const subsampling = 1
  const width = window.innerWidth * subsampling
  const height = window.innerHeight * subsampling
  const currentCanvas = renderer.domElement
  if (currentCanvas.width !== width || currentCanvas.height !== height) {
    camera.aspect = width / height
    camera.zoom = Math.min(1, width / height)
    camera.updateProjectionMatrix()
    renderer.setSize(width, height)
    if (subsampling !== 1) {
      currentCanvas.style.width = null
      currentCanvas.style.height = null
    } else {
      currentCanvas.style.width = width + 'px'
      currentCanvas.style.height = height + 'px'
    }
  }

  render()
}

window.ondeviceorientation = window.onresize = size
size()

interactions(boxes, links, raycaster, render, controls, camera, scene, surface)
window.boxes = boxes
window.render = render
