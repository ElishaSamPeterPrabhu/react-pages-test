import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const [message, setMessage] = useState('')

  return (
    <main className="app">
      <header className="hero">
        <p className="eyebrow">React Pages Test</p>
        <h1>Hello from GitHub Pages</h1>
        <p className="subtitle">
          A small React app with a few basic interactions.
        </p>
      </header>

      <section className="card">
        <h2>Counter</h2>
        <p className="value">{count}</p>
        <div className="actions">
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Increment
          </button>
          <button type="button" className="secondary" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </section>

      <section className="card">
        <h2>Like toggle</h2>
        <button
          type="button"
          className={liked ? 'toggle active' : 'toggle'}
          onClick={() => setLiked((value) => !value)}
        >
          {liked ? 'Liked' : 'Like this page'}
        </button>
      </section>

      <section className="card">
        <h2>Text echo</h2>
        <label className="field">
          <span>Type something</span>
          <input
            type="text"
            value={message}
            placeholder="Say hello..."
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>
        <p className="echo">
          {message.trim() ? `You typed: ${message}` : 'Your message will appear here.'}
        </p>
      </section>
    </main>
  )
}

export default App
