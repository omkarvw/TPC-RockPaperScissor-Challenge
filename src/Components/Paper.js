import React from 'react'

function Paper(props) {

  const passingTheChoice = () => {
    props.handleOptionSelected('paper')
  }

  return (
    <div id='paper-holder' className={props.classList} onClick = {passingTheChoice} >
        <img src={require("./Images/icon-paper.svg").default} alt="icon-paper" className={props.imgClassList} />
    </div>
  )
}

export default Paper

// option paper-option selectedImage