import { Vector2 } from 'three'

import interact from 'interactjs'
import { box, curvatureTranslate, xy } from './math'
import { initialize3d } from './render'
import './style.css'
import { makeSurface } from './surface'
import { createBox, updateBox } from './box'

const { scene, camera, controls, raycaster, renderer } = initialize3d()
const surface = makeSurface()
scene.add(surface)
const boxes = [
  box(xy([0, 0]), 2, 1, [0.5, 0.75, 0]),
  box(xy([0.4, 2]), 2, 1, [0.15, 0.5, 0.6]),
  box(xy([1, -1.5]), 1, 0.75, [0.8, 0.5, 0.2]),
  box(xy([-2, -2]), 3, 2, [0.5, 0, 0.9]),
  box(xy([-2, 5]), 3, 2, [0.5, 0.7, 0.9]),
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

const update = () => {
  boxes.forEach(updateBox)
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

const translate = d => {
  boxes.forEach(({ points }) => {
    points.forEach(point => curvatureTranslate(point, d))
  })
}

controls.enabled = false

interact('#c3d')
  .draggable({
    inertia: true,
    listeners: {
      move: e => {
        if (!controls.enabled) {
          const s = Math.min(window.innerWidth, window.innerHeight) * 0.9
          translate([e.dx / s, -e.dy / s])
          render()
        }
      },
      end: () => {},
    },
  })
  // .on('tap', e => {
  //   const p = new Vector2()
  //   p.x = 1 - (2 * e.x) / window.innerWidth
  //   p.y = 1 - (2 * e.y) / window.innerHeight

  //   raycaster.setFromCamera(p, camera)
  //   raycaster.intersectObject(hyperboloid).forEach(({ point }) => {
  //     console.log(point.toArray(), project(point.toArray()))
  //   })
  // })
  .on('doubletap', e => {
    const p = new Vector2()
    p.x = 1 - (2 * e.x) / window.innerWidth
    p.y = 1 - (2 * e.y) / window.innerHeight

    raycaster.setFromCamera(p, camera)
    raycaster.intersectObject(surface).forEach(({ point }) => {
      const newBox = box([point.x, point.y, point.z], 0.5, 0.3, [
        Math.random(),
        Math.random(),
        Math.random(),
      ])
      createBox(newBox)
      scene.add(newBox.mesh)
      scene.add(newBox.line)
      boxes.push(newBox)
    })
    render()
  })

addEventListener('keydown', e => {
  if (e.code == 'Tab') {
    controls.enabled = !controls.enabled
  }
})

window.boxes = boxes
window.render = render
