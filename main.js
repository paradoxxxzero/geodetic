import {
  BufferAttribute,
  BufferGeometry,
  Color,
  DoubleSide,
  DynamicDrawUsage,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './style.css'
import { box, hyperbolicTranslate } from './math'
import interact from 'interactjs'

const boxes = [
  box([0, 0], 2, 1, [0.5, 0.75, 0]),
  box([0.4, 2], 2, 1, [0.15, 0.5, 0.6]),
  box([1, -0.75], 1, 0.75, [0.8, 0.5, 0.2]),
]

// const boxes = new Array(100)
//   .fill(0)
//   .map((_, i) =>
//     box([5 - Math.floor(i / 10), 5 - Math.floor(i % 10)], 0.25, 0.25, [
//       Math.floor(i % 10) / 10,
//       Math.floor(i / 10) / 10,
//       1,
//     ])
//   )

const renderer = new WebGLRenderer({
  antialias: true,
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(new Color(0xffffff), 1)

renderer.domElement.id = 'c3d'
document.body.appendChild(renderer.domElement)

const scene = new Scene()

const camera = new PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.01,
  1000
)
camera.position.set(0, 0, -1)
camera.up.set(0, 1, 0)
camera.lookAt(0, 0, 10)
camera.zoom = Math.min(1, window.innerWidth / window.innerHeight)
camera.updateProjectionMatrix()

// const ambientLight = new AmbientLight(0x999999)
// scene.add(ambientLight)

// const pointLight = new PointLight(0xffffff, 1)
// camera.add(pointLight)

scene.add(camera)
const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 0
controls.maxDistance = 100

camera.fov = 90
camera.position.set(0, 0, -1 * 0.99)
controls.target.set(0, 0, 0)
camera.updateProjectionMatrix()
controls.update()

const MAX = 1000

const positions = new Float32Array(3 * MAX)
const colors = new Float32Array(3 * MAX)
const geometry = new BufferGeometry()
geometry.setAttribute(
  'position',
  new BufferAttribute(positions, 3).setUsage(DynamicDrawUsage)
)
geometry.setAttribute(
  'color',
  new BufferAttribute(colors, 3).setUsage(DynamicDrawUsage)
)

const lineGeometry = new BufferGeometry()
const linePositions = new Float32Array(3 * MAX)
lineGeometry.setAttribute(
  'position',
  new BufferAttribute(linePositions, 3).setUsage(DynamicDrawUsage)
)
const lineColors = new Float32Array(3 * MAX)
lineGeometry.setAttribute(
  'color',
  new BufferAttribute(lineColors, 3).setUsage(DynamicDrawUsage)
)

const material = new MeshBasicMaterial({
  vertexColors: true,
  side: DoubleSide,
})
const faces = new Mesh(geometry, material)
const lineMaterial = new LineBasicMaterial({
  vertexColors: true,
})
const wireframe = new LineSegments(lineGeometry, lineMaterial)
wireframe.scale.setScalar(0.999)

scene.background = new Color(0xffffff)
faces.material.transparent = true
faces.material.opacity = 0.9

wireframe.material.transparent = true
wireframe.material.opacity = 0.9
wireframe.material.linewidth = 2

faces.geometry.setDrawRange(0, 0)
wireframe.geometry.setDrawRange(0, 0)

scene.add(wireframe)
scene.add(faces)

const update = () => {
  const positions = faces.geometry.attributes.position.array
  const colors = faces.geometry.attributes.color.array
  const linePositions = wireframe.geometry.attributes.position.array
  const lineColors = wireframe.geometry.attributes.color.array

  let i = 0
  const index = []
  const lineIndex = []
  boxes.forEach(({ points, color: [r, g, b] }) => {
    index.push(i, i + 1, i + 2, i, i + 2, i + 3)
    lineIndex.push(i, i + 1, i + 1, i + 2, i + 2, i + 3, i + 3, i)
    points.forEach(([x, y, z]) => {
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
      linePositions[i * 3] = x
      linePositions[i * 3 + 1] = y
      linePositions[i * 3 + 2] = z
      colors[i * 3] = r
      colors[i * 3 + 1] = g
      colors[i * 3 + 2] = b
      lineColors[i * 3] = 0
      lineColors[i * 3 + 1] = 0
      lineColors[i * 3 + 2] = 0
      i++
    })
  })

  faces.geometry.setIndex(index)
  faces.geometry.setDrawRange(0, index.length)
  faces.geometry.attributes.position.needsUpdate = true
  faces.geometry.attributes.color.needsUpdate = true
  faces.geometry.computeBoundingSphere()

  wireframe.geometry.setIndex(lineIndex)
  wireframe.geometry.setDrawRange(0, lineIndex.length)
  wireframe.geometry.attributes.position.needsUpdate = true
  wireframe.geometry.attributes.color.needsUpdate = true
  wireframe.geometry.computeBoundingSphere()
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
    points.forEach(point => hyperbolicTranslate(point, d))
  })
}

controls.enabled = false

interact('#c3d').draggable({
  inertia: true,
  listeners: {
    move: e => {
      if (!e.shiftKey) {
        const w2 = window.innerWidth / 2
        const h2 = window.innerHeight / 2
        translate([e.dx / w2, -e.dy / h2])
        // controls.enabled = false
        render()
      }
    },
    end: () => {
      // controls.enabled = true
    },
  },
})
