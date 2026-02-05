import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Intro({ next, startMusic }) {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    if (!revealed) {
      startMusic()   // 🎵 guaranteed gesture
      setRevealed(true)
    }
  }

  const handleBegin = (e) => {
    e.stopPropagation()
    next()
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

        // 🔥 IMPORTANT CHANGE
        onPointerDown={handleReveal}
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

            <button onClick={handleBegin}>Begin →</button>
          </>
        )}
      </motion.div>
    </section>
  )
}
