import { Card, CardContent, Typography } from "@material-ui/core"
import React from "react"
import "./Message.css"

function Messages(props) {
  return (
    <div>
      <h3>
        <Card className="message__card">
          <CardContent>
            <Typography color="white" variant="h5" component="h2">
              {props.text}
            </Typography>
          </CardContent>
        </Card>
        {props.username}: {props.text}
      </h3>
    </div>
  )
}

export default Messages
