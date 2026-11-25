import { useCallback, useEffect, useRef, useState } from 'react'

// A tiny playable Snake for the loading screen (arrow keys / WASD / swipe).
const COLS = 28
const ROWS = 16
const CELL = 14

function getBest() {
  try {
    return Number(localStorage.getItem('nox-snake-best') || 0)
  } catch {
    return 0
  }
}

export default function Snake({ onStart }) {
  const ref = useRef(null)
  const st = useRef({ snake: [], dir: [1, 0], next: [1, 0], food: [0, 0], running: false, over: false, score: 0 })
  const [score, setScore] = useState(0)
  const [best, setBest] = useState(getBest)
  const onStartRef = useRef(onStart)
  onStartRef.current = onStart
  const [msg, setMsg] = useState('Arrow keys or swipe to play')

  const placeFood = (s) => {
    for (let t = 0; t < 200; t++) {
      const f = [Math.floor(Math.random() * COLS), Math.floor(Math.random() * ROWS)]
      if (!s.snake.some(([x, y]) => x === f[0] && y === f[1])) {
        s.food = f
        return
      }
    }
  }

  const reset = useCallback(() => {
    const s = st.current
    s.snake = [
      [6, 8],
      [5, 8],
      [4, 8],
    ]
    s.dir = [1, 0]
    s.next = [1, 0]
    s.running = false
    s.over = false
    s.score = 0
    placeFood(s)
    setScore(0)
    setMsg('Arrow keys or swipe to play')
  }, [])

  const turn = useCallback(
    (d) => {
      const s = st.current
      if (s.over) {
        reset()
        return
      }
      if (d[0] === -s.dir[0] && d[1] === -s.dir[1]) return
      s.next = d
      if (!s.running) {
        s.running = true
        setMsg('')
        onStartRef.current?.()
      }
    },
    [reset]
  )

  useEffect(() => {
    reset()
    const keys = {
      ArrowUp: [0, -1],
      ArrowDown: [0, 1],
      ArrowLeft: [-1, 0],
      ArrowRight: [1, 0],
      w: [0, -1],
      s: [0, 1],
      a: [-1, 0],
      d: [1, 0],
    }
    const onKey = (e) => {
      const d = keys[e.key]
      if (d) {
        e.preventDefault()
        turn(d)
      }
    }
    window.addEventListener('keydown', onKey)

    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let raf
    let last = 0
    const draw = () => {
      const s = st.current
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(243,242,238,0.06)'
      for (let x = 0; x < COLS; x++) for (let y = 0; y < ROWS; y++) ctx.fillRect(x * CELL + CELL / 2 - 1, y * CELL + CELL / 2 - 1, 2, 2)
      ctx.fillStyle = '#f3f2ee'
      ctx.fillRect(s.food[0] * CELL + 3, s.food[1] * CELL + 3, CELL - 6, CELL - 6)
      s.snake.forEach(([x, y], i) => {
        ctx.globalAlpha = i === 0 ? 1 : Math.max(0.35, 1 - i * 0.025)
        ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2)
      })
      ctx.globalAlpha = 1
    }
    const tick = (t) => {
      const s = st.current
      if (s.running && !s.over && t - last > 105) {
        last = t
        s.dir = s.next
        const head = [s.snake[0][0] + s.dir[0], s.snake[0][1] + s.dir[1]]
        const hit = head[0] < 0 || head[1] < 0 || head[0] >= COLS || head[1] >= ROWS || s.snake.some(([x, y]) => x === head[0] && y === head[1])
        if (hit) {
          s.over = true
          s.running = false
          setMsg('Game over. Press any arrow to retry')
          setBest((b) => {
            const nb = Math.max(b, s.score)
            try {
              localStorage.setItem('nox-snake-best', String(nb))
            } catch {
              /* ignore */
            }
            return nb
          })
        } else {
          s.snake.unshift(head)
          if (head[0] === s.food[0] && head[1] === s.food[1]) {
            s.score += 1
            setScore(s.score)
            placeFood(s)
          } else s.snake.pop()
        }
      }
      draw()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    // swipe
    let sx = 0
    let sy = 0
    const ts = (e) => {
      sx = e.touches[0].clientX
      sy = e.touches[0].clientY
    }
    const te = (e) => {
      const t = e.changedTouches[0]
      const dx = t.clientX - sx
      const dy = t.clientY - sy
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 18) return
      turn(Math.abs(dx) > Math.abs(dy) ? [dx > 0 ? 1 : -1, 0] : [0, dy > 0 ? 1 : -1])
    }
    canvas.addEventListener('touchstart', ts, { passive: true })
    canvas.addEventListener('touchend', te, { passive: true })

    return () => {
      window.removeEventListener('keydown', onKey)
      canvas.removeEventListener('touchstart', ts)
      canvas.removeEventListener('touchend', te)
      cancelAnimationFrame(raf)
    }
  }, [reset, turn])

  return (
    <div className="snake">
      <div className="snake-top mono">
        <span>Play while you wait</span>
        <span>
          Score {score} · Best {best}
        </span>
      </div>
      <div className="snake-board">
        <canvas ref={ref} width={COLS * CELL} height={ROWS * CELL} aria-label="Snake game" />
        {msg && <div className="snake-msg mono">{msg}</div>}
      </div>
    </div>
  )
}
