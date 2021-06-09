import React, { useState } from "react"
import { Button, FormControl, Input, InputLabel } from "@material-ui/core"
import "./App.css"

function App() {
  const [input, setInput] = useState("")
  console.log(input)
  const [messages, setMessages] = useState([])
  console.log(messages)

  const sendMessage = (event) => {
    // logic involving sending message
    event.preventDefault()
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Quick Reach</h1>

      <form>
        <FormControl>
          <InputLabel>type message✍🏻</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          variant="outlined"
          color="primary"
          type="submit"
          onClick={sendMessage}
        >
          ✉ send
        </Button>
      </form>

      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  )
}

export default App
