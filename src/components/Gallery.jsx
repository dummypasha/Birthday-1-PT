import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

import img1 from '../assets/girl1.png'
import img2 from '../assets/girl1.png'
import img3 from '../assets/girl1.png'
import img4 from '../assets/girl2.png'

import clickSound from '../assets/click.mp3'
import memorySound from '../assets/memory.mp3'

const photos = [
  {
    img: img1,
    text: (
      <>
        <span>Keep laughing 💖</span>
        <span>You look the cutest when you do.</span>
      </>
    )
  },
  {
    img: img2,
    text: (
      <>
        <span>Be strong 💪</span>
        <span>You’ve always been stronger than you know.</span>
      </>
    )
  },

  {
  img: img3,
  text: (
    <>
      <span>Heyyy… first of all, I’m really proud of you 🤍✨</span>
      <span>
        The way you care for your friends is honestly the cutest thing ever.
        Ni innocence lo oka chinna magic untundi… that’s rare.
      </span>
      <span>
        The respect you give your family, the way you value their feelings —
        that shows how strong and grounded you are and You’re always mindful not to hurt them,
      </span>
      <span>
        You know exactly how to behave in every situation —
        classy when needed, fun when it’s light, mature when it matters.
      </span>
      <span>
        You’re hardworking, independent, and building your own path.
        But what makes you even more special is your dhairyam —
        that quiet courage you carry inside.
      </span>
      <span>
       Now that you’re in the US, building your life on your own,
       standing on your own feet — that independence honestly looks really good on you.
      </span>
      <span>
        Even when things are tough, you don’t run away.
        You face it. Calmly and Strongly.
      </span>
      <span>
        You fall, you overthink, you feel deeply —
        but you always rise again. That resilience? Queen energy 👑
      </span>
      <span>
        Being around you feels peaceful, safe, and positive.
        Soft heart + strong mindset combo… very rare.
      </span>
      <span>
        Just stay the same, okay?
That soft heart + strong mindset + fearless dhairyam combo… it’s something really special 🤍✨
      </span>
    </>
  )
},


 
  {
    img: img4,
    text: (
      <>
        <span>Thanks for clicking this✨ moment 🎬</span>
        <span>
          
          I hope you remembered it — 🤍
        </span>
      </>
    )
  }
]

export default function Gallery({ next, back }) {
  const [flipped, setFlipped] = useState(null)
  const memoryAudioRef = useRef(null)

  const stopMemorySong = () => {
    if (memoryAudioRef.current) {
      memoryAudioRef.current.pause()
      memoryAudioRef.current.currentTime = 0
      memoryAudioRef.current = null
    }
  }

  const playSound = (index) => {
    const isLastImage = index === photos.length - 1
    stopMemorySong()

    if (isLastImage) {
      const audio = new Audio(memorySound)
      audio.volume = 0.18
      audio.play().catch(() => {})
      memoryAudioRef.current = audio
    } else {
      const click = new Audio(clickSound)
      click.volume = 0.15
      click.play().catch(() => {})
    }
  }

  const handleFlip = (index) => {
    playSound(index)
    setFlipped(flipped === index ? null : index)
  }

  const handleNext = () => {
    stopMemorySong()
    next()
  }

  const handleBack = () => {
    stopMemorySong()
    back()
  }

  return (
    <section className="gallery-section">
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Moments That Make You Smile</h1>

        <p className="gallery-hint">
          ✨ Tap on each moment to reveal a little smile ✨
        </p>

        <div className="gallery-grid">
          {photos.map((item, index) => (
            <div
              key={index}
              className={`photo-card ${flipped === index ? 'flipped' : ''}`}
              onClick={() => handleFlip(index)}
            >
              <div className="photo-inner">
                <div className="photo-front">
                  <img src={item.img} alt="memory" />
                </div>

                <div className="photo-back">
                  <div className="gallery-sparkles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <p className="gallery-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={handleBack}>← Back</button>
          <button onClick={handleNext}>NEXT →</button>
        </div>
      </motion.div>
    </section>
  )
}
