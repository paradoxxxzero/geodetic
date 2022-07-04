import {
  BufferGeometry,
  BufferAttribute,
  StreamDrawUsage,
  DoubleSide,
  MeshLambertMaterial,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  Color,
} from 'three'
import { curve } from './math'
export const createBox = box => {
  const MAX = 30000

  const positions = new Float32Array(3 * MAX)
  const normals = new Float32Array(3 * MAX)
  const geometry = new BufferGeometry()
  geometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(StreamDrawUsage)
  )
  geometry.setAttribute(
    'normal',
    new BufferAttribute(normals, 3).setUsage(StreamDrawUsage)
  )

  const linePositions = new Float32Array(3 * MAX)
  const lineGeometry = new BufferGeometry()
  lineGeometry.setAttribute(
    'position',
    new BufferAttribute(linePositions, 3).setUsage(StreamDrawUsage)
  )

  const material = new MeshLambertMaterial({
    side: DoubleSide,
    transparent: true,
    opacity: 0.9,
    color: new Color().fromArray(box.color),
    // wireframe: true,
  })
  const lineMaterial = new LineBasicMaterial({
    transparent: true,
    opacity: 0.9,
    linewidth: 4,
    color: new Color().fromArray(box.color),
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
  const { mesh, line } = box

  const positions = mesh.geometry.attributes.position.array
  const normals = mesh.geometry.attributes.normal.array
  const linePositions = line.geometry.attributes.position.array

  const p = 0.05
  let pos = 0
  let linePos = 0
  const index = []
  const lineIndex = []
  const { points } = box
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
      positions[pos * 3] = xi
      positions[pos * 3 + 1] = yi
      positions[pos * 3 + 2] = zi
      if (i !== 0 && pos > startPos) {
        // normals[pos * 3] = positions[(pos - len - 1) * 3]
        // normals[pos * 3 + 1] = positions[(pos - len - 1) * 3 + 1]
        // normals[pos * 3 + 2] = positions[(pos - len - 1) * 3 + 2]
        index.push(pos - len - 1, pos - 1, pos - len)
        index.push(pos - len, pos - 1, pos)
      } else {
        normals[pos * 3] = 0
        normals[pos * 3 + 1] = 0
        normals[pos * 3 + 2] = 0
      }
      pos++
    }
  }

  mesh.geometry.setIndex(index)
  mesh.geometry.setDrawRange(0, index.length)
  mesh.geometry.attributes.position.needsUpdate = true
  mesh.geometry.attributes.normal.needsUpdate = true
  mesh.geometry.computeVertexNormals()
  // mesh.geometry.computeBoundingSphere()

  line.geometry.setIndex(lineIndex)
  line.geometry.setDrawRange(0, lineIndex.length)
  line.geometry.attributes.position.needsUpdate = true
  // line.geometry.computeBoundingSphere()
}
