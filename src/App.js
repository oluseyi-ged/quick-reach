import React, { useState } from "react"
import "./App.css"

function App() {
  const [input, setInput] = useState("")
  console.log(input)
  const [messages, setMessages] = useState([])
  console.log(messages)

  const sendMessage = (event) => {
    // logic involving sending message
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Quick Reach</h1>

      <input value={input} onChange={(event) => setInput(event.target.value)} />
      <button onClick={sendMessage}>✉ send</button>
    </div>
  )
}

export default App
