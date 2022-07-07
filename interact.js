import interact from 'interactjs'
import { Vector2 } from 'three'
import { addBox, removeBox, changeBoxText } from './box'
import { addLink, removeLink } from './link'
import { curvatureTranslate, getPoints } from './math'

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

  const select = (x, y, shiftKey, ctrlKey, noUnselect) => {
    const p = new Vector2()
    p.x = (2 * x) / window.innerWidth - 1
    p.y = 1 - (2 * y) / window.innerHeight
    const selected = boxes.filter(box => box.selected)

    if (!shiftKey && !ctrlKey && (!noUnselect || selected.length === 1)) {
      selected.forEach(box => {
        box.selected = false
      })
    }
    if (selected.length > 1 && !(shiftKey || ctrlKey) && noUnselect) {
      return
    }
    raycaster.setFromCamera(p, camera)
    raycaster
      .intersectObjects(boxes.map(box => box.mesh))
      .forEach(({ object }) => {
        const box = boxes.find(box => box.mesh === object)
        box.selected = ctrlKey ? !box.selected : true
      })
  }

  controls.enabled = false

  interact('#c3d')
    .draggable({
      inertia: true,
      listeners: {
        start: e => {
          select(e.x0, e.y0, e.shiftKey, e.ctrlKey, true)
          render()
        },
        move: e => {
          const r = e.ctrlKey ? 0.5 : e.altKey ? 0.25 : 1
          if (!controls.enabled) {
            const s = Math.min(window.innerWidth, window.innerHeight) * 0.9 * r
            translate([-e.dx / s, -e.dy / s])
            render()
          }
        },
        end: () => {},
      },
    })
    .on('tap', e => {
      select(e.x, e.y, e.shiftKey, e.ctrlKey)
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
        const text = prompt(`Text for "${box.text}" box?`)
        if (!text) {
          return
        }
        changeBoxText(scene, box, text)
      } else {
        raycaster.intersectObject(surface).forEach(({ point }) => {
          const text = prompt('Text for new box?')
          if (!text) {
            return
          }
          addBox(boxes, scene, {
            text,
            center: [point.x, point.y, point.z],
            color: [Math.random(), Math.random(), Math.random()],
          })
        })
      }
      render()
    })

  addEventListener('keydown', e => {
    console.log(e.code, e.key)
    if (e.key === 'c') {
      // C -> Toggle control type
      controls.enabled = !controls.enabled
    } else if (e.key === 'a') {
      // A -> Select all boxes
      boxes.forEach(box => {
        box.selected = true
      })
      render()
    } else if (e.code === 'Escape') {
      // Escape -> Unselect all boxes
      boxes.forEach(box => {
        box.selected = false
      })
      render()
    } else if (e.key === 'l') {
      // L -> Link all selected boxes
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
        pairs.forEach(pair => addLink(links, scene, { boxes: pair }))
        render()
      }
    } else if (e.key === 'u') {
      // U -> Unlink all selected boxes
      const selected = boxes.filter(box => box.selected)

      if (selected.length > 1) {
        links
          .filter(link => link.boxes.every(box => selected.includes(box)))
          .forEach(link => removeLink(links, scene, link))
        render()
      }
    } else if (e.key === 'r') {
      // R -> Reset boxes orientation
      const selected = boxes.filter(box => box.selected)
      selected.forEach(box => {
        box.points = getPoints(box.center, box.width, box.height)
      })
      render()
    } else if (e.code === 'Delete') {
      // Delete -> Remove all selected boxes (and links)
      const selected = boxes.filter(box => box.selected)
      selected.forEach(box => {
        links
          .filter(link => link.boxes.includes(box))
          .forEach(link => removeLink(links, scene, link))
        removeBox(boxes, scene, box)
      })
      render()
    }
  })
}
