import React from 'react'
import Score from './Score'

function TitleBoard(props) {
  return (
    <div id='title-board'>
        <img src={require('./Images/logo.svg').default} alt="" id='logoImg' />
        <Score scoreCounter= {props.scoreCounter} ></Score>
    </div>
  )
}

export default TitleBoard