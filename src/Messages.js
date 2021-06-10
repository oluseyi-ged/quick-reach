import { Card, CardContent, Typography } from "@material-ui/core"
import React, { forwardRef } from "react"
import "./Message.css"

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h1">
            {message.message}
          </Typography>
        </CardContent>
      </Card>
      <p className="user__signify">{message.username}✔✔</p>
    </div>
  )
})

export default Message
