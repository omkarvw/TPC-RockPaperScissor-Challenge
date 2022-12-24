import React from 'react'
import Choice from './Choice'
import House from './House'
import Message from './Message'
import { useState } from 'react'

function Result(props) {

  const [houseChoice, setHouseChoice] = useState("")

  const handleHouseChoice = (houseChoice) => {
    setHouseChoice(houseChoice)
  }

  return (
    <div id='result' >
      {/* {props.optionSelected} */}
        <Choice optionSelected = {props.optionSelected} ></Choice>
        <Message
         handleOptionSelected = {props.handleOptionSelected} 
         playerChoice = {props.optionSelected} 
         houseChoice = {houseChoice}
         increaseScoreCounter = {props.increaseScoreCounter} 
         ></Message>
        <House handleHouseChoice = {handleHouseChoice} ></House>
    </div>
  )
}

export default Result