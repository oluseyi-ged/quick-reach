import React, { useState, useEffect } from "react"
import { Button, FormControl, Input, InputLabel } from "@material-ui/core"
import Message from "./Messages"
import "./App.css"
import db from "./firebase"
import firebase from "firebase"

function App() {
  const [input, setInput] = useState("")
  console.log(input)
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState([])

  useEffect(() => {
    //run once when the app component loads
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  useEffect(() => {
    //run code once...
    //if blank in [], run code once when page loads
    setUsername(prompt("Please enter your name"))
  }, [])

  const sendMessage = (event) => {
    // logic involving sending message
    event.preventDefault()

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    //setMessages([...messages, { username: username, message: input }])
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
        <Message username={username} message={message} />
      ))}
    </div>
  )
}

export default App
