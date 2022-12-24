import React from 'react'
import Rock from './Rock'
import Scissor from './Scissor'
import Paper from './Paper'

function Choice(props) {

  if(props.optionSelected === 'rock'){
  return (
    <div id='choice-container'>
        <div className='picked'>YOU PICKED</div>
        <Rock classList = 'option selected' imgClassList = 'selectedImage' ></Rock>
    </div>
  )}
  else if(props.optionSelected === 'paper'){
    return (
      <div id='choice-container'>
          <div className='picked'>YOU PICKED</div>
          <Paper classList = 'option selected' imgClassList = 'selectedImage' ></Paper>
      </div>
    )
  }
  else if(props.optionSelected === 'scissor'){
    return (
      <div id='choice-container'>
          <div className='picked'>YOU PICKED</div>
          <Scissor classList = 'option selected' imgClassList = 'selectedImage' ></Scissor>
      </div>
    )
  }
}

export default Choice