import React from 'react'
import Score from './Score'
import RuleContainer from './RuleContainer'

function TitleBoard(props) {
  return (
    <div id='title-board'>
        <img src={require('./Images/logo.svg').default} alt="" id='logoImg' />
        {/* <RuleContainer></RuleContainer> */}
        {/* <div>Rules</div> */}
        <Score scoreCounter= {props.scoreCounter} ></Score>
    </div>
  )
}

export default TitleBoard