import React from 'react'

function Message(props) {
  
      const [message, setMessage] = React.useState("")
      const [classList, setClassList] = React.useState("")

      const [mounted , setMounted] = React.useState(false);

      React.useEffect(() => {
        setTimeout(() => setMounted(true), 4000);
        // Never change the time 4000.please.
      })
  
      React.useEffect(() => {
          if (props.playerChoice === "rock" && props.houseChoice === "scissor") {
              setMessage("YOU WON")
              setClassList('green')
          }
          else if (props.playerChoice === "rock" && props.houseChoice === "paper") {
              setMessage("YOU LOST")
              setClassList('red')
          }
          else if (props.playerChoice === "rock" && props.houseChoice === "rock") {
              setMessage("DRAW")
              setClassList('green')
          }
          else if (props.playerChoice === "paper" && props.houseChoice === "scissor") {
              setMessage("YOU LOST")
              setClassList('red')
          }
          else if (props.playerChoice === "paper" && props.houseChoice === "paper") {
              setMessage("DRAW")
              setClassList('green')
          }
          else if (props.playerChoice === "paper" && props.houseChoice === "rock") {
              setMessage("YOU WON")
              setClassList('green')
          }
          else if (props.playerChoice === "scissor" && props.houseChoice === "scissor") {
              setMessage("DRAW")
              setClassList('green')
          }
          else if (props.playerChoice === "scissor" && props.houseChoice === "paper") {
              setMessage("YOU WON")
              setClassList('green')
          }
          else if (props.playerChoice === "scissor" && props.houseChoice === "rock") {
              setMessage("YOU LOST")
              setClassList('red')
          }
      }, [props.playerChoice, props.houseChoice])
  
      // if(message === "YOU WON"){
      //   props.increaseScoreCounter()
      // }
    //   props.increaseScoreCounter(message)

      return (
        mounted &&
          (<div id='message-container'>
              <div id='textMessage'>
                {/* {props.playerChoice} {props.houseChoice} */}
                  {message}
                  {props.increaseScoreCounter(message)}
              </div>
              <div id='playAgain' className={classList} onClick={() => props.handleOptionSelected("start")}>
                  Play Again
              </div>
          </div>)
      )
}

export default Message
