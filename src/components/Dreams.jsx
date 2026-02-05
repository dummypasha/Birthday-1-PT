import { motion } from 'framer-motion'

export default function Dreams({ next, back }) {
  return (
    <section>
      <motion.div
        className="container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Dreams Far From Home</h1>

        <p>New country. New challenges.</p>
        <p>Same brave heart.</p>

        <p>🌙 Learning to be strong, even on quiet nights.</p>
        <p>🌸 Carrying memories of home wherever she goes.</p>
        <p>💫 Finding courage in unfamiliar places.</p>
        <p>✨ Growing every day — silently, beautifully.</p>

        {/* Navigation */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '40px' }}>
          <button onClick={back}>← Back</button>
          <button onClick={next}>Memories →</button>
        </div>
      </motion.div>
    </section>
  )
}
