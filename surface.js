import {
  MeshLambertMaterial,
  DoubleSide,
  BufferGeometry,
  BufferAttribute,
  Mesh,
  SphereGeometry,
  PlaneGeometry,
} from 'three'
import { curvature, xy } from './math'

export const makeSurface = () => {
  let geometry
  const material = new MeshLambertMaterial({
    side: DoubleSide,
    color: 0x990022,
    transparent: true,
    opacity: 0.05,
    wireframe: true,
  })

  if (curvature > 0) {
    geometry = new SphereGeometry(1)
  } else if (curvature < 0) {
    const res = 100
    const hyperboloidPositions = new Float32Array(3 * res * res)
    const index = []
    for (let i = 0; i < res; i++) {
      for (let j = 0; j < res; j++) {
        const x = i - res / 2
        const y = j - res / 2
        const z = xy([x, y])[2]
        hyperboloidPositions[3 * (i * res + j)] = x
        hyperboloidPositions[3 * (i * res + j) + 1] = y
        hyperboloidPositions[3 * (i * res + j) + 2] = z
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
    geometry = new PlaneGeometry(50, 50)

    for (let i = 2; i < geometry.attributes.position.length; i += 3) {
      geometry.attributes.position[i] = 1
    }
  }
  return new Mesh(geometry, material)
}
