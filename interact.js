import interact from 'interactjs'
import { createBox } from './box'
import { createLink } from './link'
import { Vector2 } from 'three'
import { getPoints, curvatureTranslate } from './math'

export const interactions = (
  boxes,
  links,
  raycaster,
  render,
  controls,
  camera,
  scene,
  surface
) => {
  const translate = d => {
    const all = boxes.every(box => !box.selected)
    boxes.forEach(({ points, center, selected }) => {
      if (all || selected) {
        points.forEach(point => curvatureTranslate(point, d))
        curvatureTranslate(center, d)
      }
    })
  }

  const select = (x, y, shiftKey, noUnselect) => {
    const p = new Vector2()
    p.x = (2 * x) / window.innerWidth - 1
    p.y = 1 - (2 * y) / window.innerHeight
    const selected = boxes.filter(box => box.selected)

    if (!shiftKey && (!noUnselect || selected.length === 1)) {
      selected.forEach(box => {
        box.selected = false
      })
    }
    if (selected.length > 1 && !shiftKey) {
      return
    }
    raycaster.setFromCamera(p, camera)
    raycaster
      .intersectObjects(boxes.map(box => box.mesh))
      .forEach(({ object }) => {
        const box = boxes.find(box => box.mesh === object)
        box.selected = true
      })
  }

  controls.enabled = false

  interact('#c3d')
    .draggable({
      inertia: true,
      listeners: {
        start: e => {
          select(e.x0, e.y0, e.shiftKey, true)
          render()
        },
        move: e => {
          if (!controls.enabled) {
            const s =
              (Math.min(window.innerWidth, window.innerHeight) * 0.9) / 4
            translate([-e.dx / s, -e.dy / s])
            render()
          }
        },
        end: () => {},
      },
    })
    .on('tap', e => {
      select(e.x, e.y, e.shiftKey)
      render()
    })
    .on('doubletap', e => {
      const p = new Vector2()
      p.x = (2 * e.x) / window.innerWidth - 1
      p.y = 1 - (2 * e.y) / window.innerHeight

      raycaster.setFromCamera(p, camera)
      const intersectBoxes = raycaster.intersectObjects(
        boxes.map(box => box.mesh)
      )
      if (intersectBoxes.length) {
        const [{ object }] = intersectBoxes
        const box = boxes.find(box => box.mesh === object)

        box.points = getPoints(box.center, box.width, box.height)
      } else {
        raycaster.intersectObject(surface).forEach(({ point }) => {
          const text = prompt('Text?')
          if (!text) {
            return
          }
          const newBox = {
            text,
            center: [point.x, point.y, point.z],
            color: [Math.random(), Math.random(), Math.random()],
          }
          createBox(newBox)
          scene.add(newBox.mesh)
          scene.add(newBox.line)
          boxes.push(newBox)
        })
      }
      render()
    })

  addEventListener('keydown', e => {
    console.log(e.code)
    if (e.code === 'Tab') {
      controls.enabled = !controls.enabled
    } else if (e.code === 'Enter') {
      const selected = boxes.filter(box => box.selected)

      if (selected.length > 1) {
        const pairs = selected.reduce((acc, pair, i) => {
          const remaining = selected.slice(i + 1)
          if (remaining) {
            remaining.forEach(elt => {
              acc.push([pair, elt])
            })
          }
          return acc
        }, [])
        pairs.forEach(pair => {
          const newLink = { boxes: pair }
          createLink(newLink)
          scene.add(newLink.line)
          links.push(newLink)
        })
        render()
      }
    } else if (e.code === 'Delete') {
      const selected = boxes.filter(box => box.selected)
      selected.forEach(box => {
        const removedLinks = links.filter(link => link.boxes.includes(box))
        removedLinks.forEach(link => {
          scene.remove(link.line)
          links.splice(links.indexOf(link), 1)
        })
        scene.remove(box.mesh)
        scene.remove(box.line)
        boxes.splice(boxes.indexOf(box), 1)
      })
      render()
    }
  })
}
