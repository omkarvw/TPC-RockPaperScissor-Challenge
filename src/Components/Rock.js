import React from 'react'

function Rock(props) {

  const passingTheChoice = () => {
    props.handleOptionSelected('rock')
  }

  return (
    <div id='rock-holder' className={props.classList} onClick = {passingTheChoice}  >
        <img src={require('./Images/icon-rock.svg').default} alt="" className={props.imgClassList} />
    </div>
  )
}

export default Rock

// option rock-option selected selectedImage