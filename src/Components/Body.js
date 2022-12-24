// import PlayGround from "./PlayGround";
import TitleBoard from "./TitleBoard";
import MainGame from "./MainGame";
import RuleContainer from "./RuleContainer";

import React from 'react'

function Body() {

  let scoreCounter = 0;

  function increaseScoreCounter(result){
    if(result === "YOU WON")
    scoreCounter += 10;
    // if(result === "DRAW"){
    //   scoreCounter = scoreCounter + 5;
    // }
    if(result === "YOU LOST" && scoreCounter >= 5){
      scoreCounter = scoreCounter - 5;
    }
    document.getElementById('score').innerHTML = scoreCounter;
  }

  return (
    <div id="bodyDiv">
        <TitleBoard scoreCounter = {scoreCounter}></TitleBoard>
        <MainGame increaseScoreCounter = {increaseScoreCounter}></MainGame>
        <RuleContainer></RuleContainer>
    </div>
  )
}

export default Body