import { motion } from 'framer-motion'

export default function Timeline({ next, back }) {
  return (
    <section>
      <motion.div
        className="container timeline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Thanmayee’s Journey</h1>

        <div className="timeline-item">
          <p>🌸 Born on a calm February day, in Wanaparthy — where her story quietly began.</p>
        </div>

        <div className="timeline-item">
          <p>🧸 A childhood filled with simple joys, innocent smiles, and warmth.</p>
        </div>

        <div className="timeline-item">
          <p>🌱 A girl with quiet dreams and a strong heart.</p>
        </div>

        <div className="timeline-item">
          <p>📚 Late nights, patience, and self-belief.</p>
        </div>

        <div className="timeline-item">
          <p>✈️ A US visa — earned, not gifted.</p>
        </div>

        <div className="timeline-item">
          <p>🌍 Standing far from home, but stronger than ever.</p>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={back}>← Back</button>
          <button onClick={next}>Continue →</button>
        </div>
      </motion.div>
    </section>
  )
}
