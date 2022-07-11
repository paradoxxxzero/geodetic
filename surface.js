import {
  MeshLambertMaterial,
  DoubleSide,
  BufferGeometry,
  BufferAttribute,
  Mesh,
  SphereGeometry,
  PlaneGeometry,
} from 'three'
import { curvature } from './math'

export let surface

export const createSurface = () => {
  const res = 100
  let geometry
  const material = new MeshLambertMaterial({
    side: DoubleSide,
    color: 0x0044ff,
    transparent: true,
    opacity: 0.1,
  })

  if (curvature > 0) {
    geometry = new SphereGeometry(1.04)
  } else if (curvature < 0) {
    const hyperboloidPositions = new Float32Array(3 * res * res)
    const index = []
    for (let i = 0; i < res; i++) {
      for (let j = 0; j < res; j++) {
        const x = i - res / 2
        const y = j - res / 2
        const z = Math.sqrt(x * x + y * y + 1)
        hyperboloidPositions[3 * (i * res + j)] = x
        hyperboloidPositions[3 * (i * res + j) + 1] = y
        hyperboloidPositions[3 * (i * res + j) + 2] = z + 0.04
        if (i > 0 && j < res - 1) {
          index.push((i - 1) * res + j, i * res + j, (i - 1) * res + j + 1)
          index.push(i * res + j, i * res + j + 1, (i - 1) * res + j + 1)
        }
      }
    }

    geometry = new BufferGeometry()

    geometry.setAttribute(
      'position',
      new BufferAttribute(hyperboloidPositions, 3)
    )

    geometry.setIndex(index)
    geometry.setDrawRange(0, index.length)
    geometry.computeVertexNormals()
  } else {
    geometry = new PlaneGeometry(res, res, res, res)

    for (let i = 2; i < geometry.attributes.position.array.length; i += 3) {
      geometry.attributes.position.array[i] = 1.04
    }
  }
  geometry.computeBoundingSphere()
  surface = new Mesh(geometry, material)
  surface.visible = false
  return surface
}
