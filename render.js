import {
  AmbientLight,
  Color,
  PerspectiveCamera,
  PointLight,
  Raycaster,
  Scene,
  WebGLRenderer,
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { curvature } from './math'
import './style.css'

export const initialize3d = () => {
  const renderer = new WebGLRenderer({
    antialias: true,
  })

  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(new Color(0xffffff), 1)

  renderer.domElement.id = 'c3d'
  document.body.appendChild(renderer.domElement)

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

  const scene = new Scene()
  scene.background = new Color(0xffffff)

  const ambientLight = new AmbientLight(0xffffff)
  scene.add(ambientLight)

  const pointLight = new PointLight(0xffffff, 1)
  // pointLight.position.set(2, 2, 2)
  camera.add(pointLight)
  camera.fov = 90
  camera.position.set(0, 0, (curvature || -1) * 0.99)
  camera.updateProjectionMatrix()

  scene.add(camera)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0)
  controls.minDistance = 0
  controls.maxDistance = 100
  controls.addEventListener('change', () => renderer.render(scene, camera))
  controls.update()

  return {
    renderer,
    scene,
    camera,
    controls,
    raycaster,
  }
}

export const makeTextTexture = text => {
  const canvas = document.createElement('canvas')

  const fs = 256
  const ff = 'serif'
  const margin = 64

  const ctx = canvas.getContext('2d')
  ctx.font = `${fs}px ${ff}`
  const metrics = ctx.measureText(text)
  const width = metrics.width
  const height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent

  canvas.width = width + margin * 2
  canvas.height = height + margin * 2
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.font = `${fs}px ${ff}`

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#000'
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)
  return { canvas, width: canvas.width, height: canvas.height }
}
