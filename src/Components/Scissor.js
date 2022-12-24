import React from 'react'

function Scissor(props) {

  const passingTheChoice = () => {
    props.handleOptionSelected('scissor')
  }

  return (
    <div id='scissor-holder' className={props.classList} onClick = {passingTheChoice} >
        <img src={require('./Images/icon-scissors.svg').default} alt="" className={props.imgClassList} />
    </div>
  )
}

export default Scissor

// option scissor-option selected selectedImage