import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function Intro({ next, startMusic }) {
  const [revealed, setRevealed] = useState(false)
  const musicStarted = useRef(false)

  const handleReveal = () => {
    if (!revealed) {
      setRevealed(true)
    }
  }

  const startMusicOnce = () => {
    if (!musicStarted.current) {
      startMusic()            // 🎵 starts music
      musicStarted.current = true
    }
  }

  return (
    <section className="intro-section">
      {/* Floating stars */}
      <div className="stars">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>

      <motion.div
        className="container intro-card intro-click-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}

        /* 🔑 BOTH events — this is the fix */
        onPointerDown={startMusicOnce}
        onClick={handleReveal}
      >
        <h1>This is for you.</h1>

        {!revealed && (
          <p className="tap-text">Tap here 💖</p>
        )}

        {revealed && (
          <>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              A small journey through your strength and kindness.
            </motion.p>

            <button onClick={next}>Begin →</button>
          </>
        )}
      </motion.div>
    </section>
  )
}
