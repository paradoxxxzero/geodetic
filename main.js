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
  Raycaster,
  Vector2,
  MeshLambertMaterial,
  AmbientLight,
  PointLight,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './style.css'
import { box, curve, hyperbolicTranslate, xy, project } from './math'
import interact from 'interactjs'

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

const raycaster = new Raycaster()

const ambientLight = new AmbientLight(0xffffff)
scene.add(ambientLight)

const pointLight = new PointLight(0xffffff, 1)
// pointLight.position.set(2, 2, 2)
camera.add(pointLight)

scene.add(camera)
const controls = new OrbitControls(camera, renderer.domElement)
controls.minDistance = 0
controls.maxDistance = 100
controls.addEventListener('change', () => renderer.render(scene, camera))

camera.fov = 90
camera.position.set(0, 0, -1 * 0.99)
controls.target.set(0, 0, 0)
camera.updateProjectionMatrix()
controls.update()

const MAX = 300000

const res = 100
const hyperboloidPositions = new Float32Array(3 * res * res)
const index = []
for (let i = 0; i < res; i++) {
  for (let j = 0; j < res; j++) {
    const x = i - res / 2
    const y = j - res / 2
    const z = Math.sqrt(x * x + y * y + 1)
    hyperboloidPositions[3 * (i * res + j)] = x
    hyperboloidPositions[3 * (i * res + j) + 1] = y
    hyperboloidPositions[3 * (i * res + j) + 2] = z
    if (i > 0 && j < res - 1) {
      index.push((i - 1) * res + j, i * res + j, (i - 1) * res + j + 1)
      index.push(i * res + j, i * res + j + 1, (i - 1) * res + j + 1)
    }
  }
}

const hyperboloidGeometry = new BufferGeometry()

hyperboloidGeometry.setAttribute(
  'position',
  new BufferAttribute(hyperboloidPositions, 3)
)

hyperboloidGeometry.setIndex(index)
hyperboloidGeometry.setDrawRange(0, index.length)
hyperboloidGeometry.computeVertexNormals()

const hyperboloidMaterial = new MeshLambertMaterial({
  color: 0x990022,
  // opacity: 0.5,
  // transparent: true,
  side: DoubleSide,
  // wireframe: true,
})

const hyperboloid = new Mesh(hyperboloidGeometry, hyperboloidMaterial)
hyperboloid.visible = false
scene.add(hyperboloid)

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

const material = new MeshLambertMaterial({
  vertexColors: true,
  side: DoubleSide,
  // wireframe: true,
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
wireframe.material.linewidth = 4

faces.geometry.setDrawRange(0, 0)
wireframe.geometry.setDrawRange(0, 0)

scene.add(wireframe)
scene.add(faces)

const update = () => {
  const positions = faces.geometry.attributes.position.array
  const colors = faces.geometry.attributes.color.array
  const linePositions = wireframe.geometry.attributes.position.array
  const lineColors = wireframe.geometry.attributes.color.array

  const p = 0.05
  let pos = 0
  let linePos = 0
  const index = []
  const lineIndex = []
  boxes.forEach(({ points, color: [r, g, b] }) => {
    const [p1, p2, p3, p4] = points

    const p1p2 = curve(p1, p2, p)
    const p2p3 = curve(p2, p3, p)
    const p3p4 = curve(p3, p4, p)
    const p4p1 = curve(p4, p1, p)
    const p4p3 = [...p3p4].reverse()

    const startLinePos = linePos
    p1p2
      .concat(p2p3)
      .concat(p3p4)
      .concat(p4p1)
      .forEach(([x, y, z]) => {
        linePositions[linePos * 3] = x
        linePositions[linePos * 3 + 1] = y
        linePositions[linePos * 3 + 2] = z
        lineColors[linePos * 3] = r
        lineColors[linePos * 3 + 1] = g
        lineColors[linePos * 3 + 2] = b

        if (linePos > startLinePos) {
          lineIndex.push(linePos - 1, linePos)
        }
        linePos++
      })
    lineIndex.push(linePos - 1, startLinePos)

    p1p2.forEach((pi, i) => {
      const co = p4p3[i]
      const pco = curve(pi, co, p)
      const len = pco.length
      const startPos = pos
      pco.forEach(([xi, yi, zi]) => {
        positions[pos * 3] = xi
        positions[pos * 3 + 1] = yi
        positions[pos * 3 + 2] = zi
        colors[pos * 3] = r
        colors[pos * 3 + 1] = g
        colors[pos * 3 + 2] = b
        if (i !== 0 && pos > startPos) {
          index.push(pos - len - 1, pos - 1, pos - len)
          index.push(pos - len, pos - 1, pos)
        }
        pos++
      })
    })
  })

  faces.geometry.setIndex(index)
  faces.geometry.setDrawRange(0, index.length)
  faces.geometry.attributes.position.needsUpdate = true
  faces.geometry.attributes.color.needsUpdate = true
  faces.geometry.computeVertexNormals()
  // faces.geometry.computeBoundingSphere()

  wireframe.geometry.setIndex(lineIndex)
  wireframe.geometry.setDrawRange(0, lineIndex.length)
  wireframe.geometry.attributes.position.needsUpdate = true
  wireframe.geometry.attributes.color.needsUpdate = true
  // wireframe.geometry.computeBoundingSphere()
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
  boxes.forEach(({ points, center }) => {
    points.forEach(point => hyperbolicTranslate(point, d))
    hyperbolicTranslate(center, d)
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
  .on('tap', e => {
    const p = new Vector2()
    p.x = 1 - (2 * e.x) / window.innerWidth
    p.y = 1 - (2 * e.y) / window.innerHeight

    raycaster.setFromCamera(p, camera)
    raycaster.intersectObject(hyperboloid).forEach(({ point }) => {
      console.log(point.toArray(), project(point.toArray()))
    })
  })
  .on('doubletap', e => {
    const p = new Vector2()
    p.x = (2 * e.x) / window.innerWidth - 1
    p.y = 1 - (2 * e.y) / window.innerHeight

    raycaster.setFromCamera(p, camera)
    raycaster.intersectObject(hyperboloid).forEach(({ point }) => {
      boxes.push(
        box([point.x, point.y, point.z], 0.5, 0.3, [
          Math.random(),
          Math.random(),
          Math.random(),
        ])
      )
    })
    render()
  })

addEventListener('keydown', e => {
  if (e.code == 'Tab') {
    controls.enabled = !controls.enabled
  }
})

window.boxes = boxes
window.translate = translate
window.render = render
