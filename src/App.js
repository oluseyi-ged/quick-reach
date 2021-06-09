import React, { useState, useEffect } from "react"
import { Button, FormControl, Input, InputLabel } from "@material-ui/core"
import Message from "./Messages"
import "./App.css"

function App() {
  const [input, setInput] = useState("")
  console.log(input)
  const [messages, setMessages] = useState([
    { username: "poppy", text: "whats up" },
  ])
  const [username, setUsername] = useState([])

  useEffect(() => {
    //run code once...
    //if blank in [], run code once when page loads
    setUsername(prompt("Please enter your name"))
  }, [])

  const sendMessage = (event) => {
    // logic involving sending message
    event.preventDefault()
    setMessages([...messages, input])
    setInput("")
  }

  return (
    <div className="App">
      <h1>Quick Reach</h1>
      <h4>welcome {username}</h4>

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
        <Message username={message.username} text={message.text} />
      ))}
    </div>
  )
}

export default App
