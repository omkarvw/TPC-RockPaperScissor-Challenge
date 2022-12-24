import Rock from './Rock'
import Scissor from './Scissor'
import Paper from './Paper'

import React from 'react'

function PlayGround(props) {
  // const classList = 'option rock-option'
  // const imgClassList = 'optionImage'
  return (
    <div id='option-holder'>
        <Rock classList = 'option rock-option' imgClassList = 'optionImage' handleOptionSelected = {props.handleOptionSelected} />
        <Paper classList= 'option paper-option'  imgClassList = 'optionImage' handleOptionSelected = {props.handleOptionSelected} ></Paper>
        <Scissor classList = 'option scissor-option' imgClassList = 'optionImage' handleOptionSelected = {props.handleOptionSelected} ></Scissor>
    </div>
  )
}

export default PlayGround