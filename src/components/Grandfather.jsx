import { motion } from 'framer-motion'
import gfImage from '../assets/gf.png'

export default function Grandfather({ next, back }) {
  return (
    <section className="grandfather-section">
      <motion.div
        className="container grandfather-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <h1>Her Safe Place</h1>

        <div className="grandfather-image">
          <img src={gfImage} alt="Grandfather memory" />
        </div>

        <p>
          For every festival, every little happiness 🌸  
          her heart always knew where to go.
        </p>

        <p>
          Her grandfather’s home was more than a place —  
          it was comfort, warmth, and love.
        </p>

        <p>
          He held her hand,  
          making sure she never felt alone 🕊️
        </p>

        <p>
          Without many words,  
          he always believed in her.
        </p>

        <p>
          Among all the siblings,  
          his support for her was gentle, special, and constant.
        </p>

        <p>
          Even today 🤍  
          his love walks beside her —  
          quietly, endlessly, forever.
        </p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button
            onClick={() => {
              stopGfMusic() // ✅ THIS is the fix
              back()
            }}
          >
            ← Back
          </button>

          <button onClick={next}>A letter →</button>
        </div>
      </motion.div>
    </section>
  )
}
