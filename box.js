import {
  BufferGeometry,
  BufferAttribute,
  StreamDrawUsage,
  DoubleSide,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  Color,
  MeshBasicMaterial,
  CanvasTexture,
} from 'three'
import { curve, getPoints } from './math'
export const createBox = box => {
  const MAX = 100000

  const positions = new Float32Array(3 * MAX)
  const uvs = new Float32Array(2 * MAX)
  const geometry = new BufferGeometry()
  geometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(StreamDrawUsage)
  )
  geometry.setAttribute(
    'uv',
    new BufferAttribute(uvs, 2).setUsage(StreamDrawUsage)
  )

  const linePositions = new Float32Array(3 * MAX)
  const lineGeometry = new BufferGeometry()
  lineGeometry.setAttribute(
    'position',
    new BufferAttribute(linePositions, 3).setUsage(StreamDrawUsage)
  )

  const canvas = document.createElement('canvas')
  if (box.text === 'LoL') {
    canvas.style = 'position: absolute'
    document.body.append(canvas)
  }
  const fs = 80
  const ff = 'serif'
  const margin = 1.2
  const boxRatio = 0.003

  const ctx = canvas.getContext('2d')
  ctx.font = `${fs}px ${ff}`
  const metrics = ctx.measureText(box.text)
  const width = metrics.width
  const height = metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent

  canvas.width = width * margin
  canvas.height = height * margin
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.font = `${fs}px ${ff}`

  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#000'
  ctx.fillText(box.text, canvas.width / 2, canvas.height / 2)
  if (box.text === 'LoL') {
    console.log(metrics, ctx.measureText(box.text))
  }
  const material = new MeshBasicMaterial({
    side: DoubleSide,
    // transparent: true,
    // opacity: 0.9,
    color: new Color().fromArray(box.color),
    map: new CanvasTexture(canvas),
    // wireframe: true,
  })
  material.map.needsUpdate = true
  const lineMaterial = new LineBasicMaterial({
    transparent: true,
    opacity: 0.9,
    linewidth: 4,
    color: new Color('#000000'),
  })

  const boxMesh = new Mesh(geometry, material)
  const boxLine = new LineSegments(lineGeometry, lineMaterial)
  boxLine.scale.setScalar(0.999)
  boxMesh.add(boxLine)

  box.width = width * boxRatio
  box.height = height * boxRatio
  box.points = getPoints(box.center, box.width, box.height)
  box.mesh = boxMesh
  box.line = boxLine
  updateBox(box)
}

export const updateBox = box => {
  const { mesh, line, points } = box

  const positions = mesh.geometry.attributes.position.array
  const uvs = mesh.geometry.attributes.uv.array
  const linePositions = line.geometry.attributes.position.array

  const p = 0.05
  let pos = 0
  let linePos = 0
  const index = []
  const lineIndex = []

  const [p1, p2, p3, p4] = points

  const p1p2 = curve(p1, p2, p)
  const p2p3 = curve(p2, p3, p)
  const p3p4 = curve(p3, p4, p)
  const p4p1 = curve(p4, p1, p)
  const p4p3 = [...p3p4].reverse()

  const startLinePos = linePos
  const borders = p1p2.concat(p2p3).concat(p3p4).concat(p4p1)
  for (let i = 0; i < borders.length; i++) {
    const [x, y, z] = borders[i]
    linePositions[linePos * 3] = x
    linePositions[linePos * 3 + 1] = y
    linePositions[linePos * 3 + 2] = z

    if (linePos > startLinePos) {
      lineIndex.push(linePos - 1, linePos)
    }
    linePos++
  }
  lineIndex.push(linePos - 1, startLinePos)

  for (let i = 0; i < p1p2.length; i++) {
    const pi = p1p2[i]
    const co = p4p3[i]
    const pco = curve(pi, co, p)
    const len = pco.length
    const startPos = pos
    for (let j = 0; j < pco.length; j++) {
      const [xi, yi, zi] = pco[j]
      uvs[pos * 2 + 1] = 1 - i / (p1p2.length - 1)
      uvs[pos * 2] = 1 - j / (pco.length - 1)
      positions[pos * 3] = xi
      positions[pos * 3 + 1] = yi
      positions[pos * 3 + 2] = zi
      if (i !== 0 && pos > startPos) {
        index.push(pos - len - 1, pos - 1, pos - len)
        index.push(pos - len, pos - 1, pos)
      }
      pos++
    }
  }

  mesh.geometry.setIndex(index)
  mesh.geometry.setDrawRange(0, index.length)
  mesh.geometry.attributes.position.needsUpdate = true
  // mesh.geometry.computeVertexNormals()
  // mesh.geometry.computeBoundingSphere()

  line.geometry.setIndex(lineIndex)
  line.geometry.setDrawRange(0, lineIndex.length)
  line.geometry.attributes.position.needsUpdate = true
  // line.geometry.computeBoundingSphere()

  line.material.color = box.selected
    ? new Color('#ff0000')
    : new Color('#000000')
  line.material.needsUpdate = true
}
