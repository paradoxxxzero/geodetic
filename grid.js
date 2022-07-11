import {
  MeshLambertMaterial,
  DoubleSide,
  BufferGeometry,
  BufferAttribute,
  Mesh,
  SphereGeometry,
  PlaneGeometry,
  LineBasicMaterial,
  StreamDrawUsage,
  LineSegments,
  Float32BufferAttribute,
} from 'three'
import { curvature, xy, curve, slerp2 } from './math'

export let grid

export const createGrid = () => {
  const res = curvature > 0 ? 15 : 100
  const size = curvature > 0 ? 0.001 : 50
  const spacing = curvature < 0 ? 6 : 0.129
  const geometry = new BufferGeometry()
  const material = new LineBasicMaterial({
    side: DoubleSide,
    color: 0x0099ff,
    transparent: true,
    opacity: 0.15,
    linewidth: 2,
  })
  const positions = []
  const index = []

  if (curvature) {
    let pos = 0
    for (let i = -res; i <= res; i++) {
      const points = curve(
        xy([-size, i * spacing]),
        xy([size, i * spacing]),
        0.01,
        curvature,
        true
      )
      for (let j = 0; j < points.length; j++) {
        positions.push(points[j][0], points[j][1], points[j][2])
        j > 0 && index.push(pos - 1, pos)
        pos++
      }
    }
    for (let i = -res; i <= res; i++) {
      const points = curve(
        xy([i * spacing, -size]),
        xy([i * spacing, size]),
        0.01,
        curvature,
        true
      )
      for (let j = 0; j < points.length; j++) {
        positions.push(points[j][0], points[j][1], points[j][2])
        j > 0 && index.push(pos - 1, pos)
        pos++
      }
    }
  } else {
    let pos = 0
    for (let i = -res; i <= res; i++) {
      positions.push(-size, i, 1.02)
      pos++
      positions.push(size, i, 1.02)
      pos++
      index.push(pos - 2, pos - 1)
    }
    for (let i = -res; i <= res; i++) {
      positions.push(i, -size, 1.02)
      pos++
      positions.push(i, size, 1.02)
      pos++
      index.push(pos - 2, pos - 1)
    }
  }

  geometry.setAttribute(
    'position',
    new Float32BufferAttribute(positions, 3) //.setUsage(StreamDrawUsage)
  )

  geometry.setIndex(index)
  geometry.setDrawRange(0, index.length)
  geometry.attributes.position.needsUpdate = true
  geometry.computeBoundingSphere()
  grid = new LineSegments(geometry, material)
  grid.visible = true
  if (curvature > 0) {
    grid.scale.set(1.02, 1.02, 1.02)
  } else if (curvature < 0) {
    grid.position.set(0, 0, 0.02)
  }

  return grid
}
