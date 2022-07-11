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
import { makeTextTexture, scene } from './render'
import { boxes } from './objects'

const BOX_PRECISION = 1 / 25

export const createBox = box => {
  const { canvas, width, height } = makeTextTexture(box.text)
  const boxRatio = 0.001
  box.width = width * boxRatio
  box.height = height * boxRatio
  box.points = getPoints(box.center, box.width, box.height)

  const { points } = box
  const [p1, p2, p3, p4] = points

  const p1p2 = curve(p1, p2, BOX_PRECISION)
  const p2p3 = curve(p2, p3, BOX_PRECISION)
  const p3p4 = curve(p3, p4, BOX_PRECISION)
  const p4p1 = curve(p4, p1, BOX_PRECISION)
  const p4p3 = [...p3p4].reverse()
  const nb = p1p2.concat(p2p3).concat(p3p4).concat(p4p1).length
  const n = p1p2
    .map((pi, i) => curve(pi, p4p3[i], BOX_PRECISION).length)
    .reduce((a, b) => a + b, 0)

  const positions = new Float32Array(3 * n)
  const uvs = new Float32Array(2 * n)
  const geometry = new BufferGeometry()
  geometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(StreamDrawUsage)
  )
  geometry.setAttribute(
    'uv',
    new BufferAttribute(uvs, 2).setUsage(StreamDrawUsage)
  )

  const linePositions = new Float32Array(3 * nb)
  const lineGeometry = new BufferGeometry()
  lineGeometry.setAttribute(
    'position',
    new BufferAttribute(linePositions, 3).setUsage(StreamDrawUsage)
  )

  const material = new MeshBasicMaterial({
    side: DoubleSide,
    color: new Color().fromArray(box.color),
    map: new CanvasTexture(canvas),
    // wireframe: true,
  })
  material.map.needsUpdate = true
  const lineMaterial = new LineBasicMaterial({
    linewidth: 4,
    color: new Color('#000000'),
  })

  const boxMesh = new Mesh(geometry, material)
  const boxLine = new LineSegments(lineGeometry, lineMaterial)
  boxLine.scale.setScalar(0.999)
  boxMesh.add(boxLine)

  box.mesh = boxMesh
  box.line = boxLine
  updateBox(box)
}

export const updateBox = box => {
  const { mesh, line, points } = box

  const positions = mesh.geometry.attributes.position.array
  const uvs = mesh.geometry.attributes.uv.array
  const linePositions = line.geometry.attributes.position.array

  let pos = 0
  let linePos = 0
  const index = []
  const lineIndex = []

  const [p1, p2, p3, p4] = points

  const p1p2 = curve(p1, p2, BOX_PRECISION)
  const p2p3 = curve(p2, p3, BOX_PRECISION)
  const p3p4 = curve(p3, p4, BOX_PRECISION)
  const p4p1 = curve(p4, p1, BOX_PRECISION)
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
    const pco = curve(pi, co, BOX_PRECISION)
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
  mesh.geometry.computeBoundingSphere()

  line.geometry.setIndex(lineIndex)
  line.geometry.setDrawRange(0, lineIndex.length)
  line.geometry.attributes.position.needsUpdate = true
  line.geometry.computeBoundingSphere()

  line.material.color = box.selected
    ? new Color('#ff0000')
    : new Color('#000000')
  line.material.needsUpdate = true
}

export const addBox = box => {
  createBox(box)
  scene.add(box.mesh)
  scene.add(box.line)
  boxes.push(box)
}

export const removeBox = box => {
  scene.remove(box.mesh)
  scene.remove(box.line)
  boxes.splice(boxes.indexOf(box), 1)
}

export const changeBoxText = (box, text) => {
  scene.remove(box.mesh)
  scene.remove(box.line)
  box.text = text
  createBox(box)
  scene.add(box.mesh)
  scene.add(box.line)
}
