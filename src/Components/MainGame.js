import PlayGround from "./PlayGround";
import Result from "./Result";
import { useState } from "react";

import React from 'react'

function MainGame(props) {

  const [playgroundVisible, setPlaygroundVisible] = useState(true)
  const [optionSelected, setOptionSelected] = useState()

  const handleOptionSelected = (option) => {
    if (option === "start") {

    }
    else {
      setOptionSelected(option)
    }

    if (playgroundVisible) {
      setPlaygroundVisible(false)
    } else {
      setPlaygroundVisible(true)
    }
  }

  if (playgroundVisible) {
    return (
      <div id="main-game">
        <PlayGround handleOptionSelected={handleOptionSelected}  ></PlayGround>
      </div>
    )
  }
  else {
    return (
      <div id="main-game">
        <Result optionSelected={optionSelected} handleOptionSelected={handleOptionSelected} increaseScoreCounter = {props.increaseScoreCounter}></Result>
      </div>
    )
  }
}

export default MainGame