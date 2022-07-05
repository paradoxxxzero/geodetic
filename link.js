import {
  BufferGeometry,
  BufferAttribute,
  StreamDrawUsage,
  LineBasicMaterial,
  Color,
  LineSegments,
} from 'three'
import { curve } from './math'

export const createLink = link => {
  const MAX = 10000

  const positions = new Float32Array(3 * MAX)
  const geometry = new BufferGeometry()
  geometry.setAttribute(
    'position',
    new BufferAttribute(positions, 3).setUsage(StreamDrawUsage)
  )
  const material = new LineBasicMaterial({
    transparent: true,
    opacity: 0.9,
    linewidth: 4,
    color: new Color('#000000'),
  })

  const line = new LineSegments(geometry, material)
  link.line = line
  updateLink(link)
}

export const updateLink = link => {
  const { line, boxes } = link

  const positions = line.geometry.attributes.position.array

  const p = 0.05
  let pos = 0
  const index = []
  const p1 = boxes[0].center
  const p2 = boxes[1].center

  const p1p2 = curve(p1, p2, p)

  for (let i = 0; i < p1p2.length; i++) {
    const [x, y, z] = p1p2[i]
    positions[pos * 3] = x
    positions[pos * 3 + 1] = y
    positions[pos * 3 + 2] = z + 0.01

    if (pos > 0) {
      index.push(pos - 1, pos)
    }
    pos++
  }

  line.geometry.setIndex(index)
  line.geometry.setDrawRange(0, index.length)
  line.geometry.attributes.position.needsUpdate = true

  line.material.color = boxes.every(box => box.selected)
    ? new Color('#ff0000')
    : new Color('#000000')
  line.material.needsUpdate = true
}
