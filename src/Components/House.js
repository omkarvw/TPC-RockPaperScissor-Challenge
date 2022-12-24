import React, { useEffect } from 'react'
import Scissor from './Scissor'
import Rock from './Rock';
import Paper from './Paper';

const House = (props) => {

  
  let randNum = Math.floor(Math.random() *1000);
  randNum = randNum%3;

  const [mounted , setMounted] = React.useState(false);
  useEffect(() => {
    setTimeout(() => setMounted(true), 2000);
  })

  if(randNum === 0){
  props.handleHouseChoice('rock')
  return (
    mounted &&
   ( <div>
        <div className='picked'>
        THE HOUSE PICKED
        </div>
        <Rock classList = 'option selected' imgClassList = 'selectedImage' ></Rock>
    </div>)
  )}
  else if(randNum === 1){
    props.handleHouseChoice('paper')
    return (
      mounted &&
      (<div>
          <div className='picked'>
          THE HOUSE PICKED
          </div>
          <Paper classList = 'option selected' imgClassList = 'selectedImage' ></Paper>
      </div>)
    )
  }
  else if(randNum === 2){
    props.handleHouseChoice('scissor')
    return (
      mounted &&
      (<div className='houseHolder' >
          <div className='picked'>
          THE HOUSE PICKED
          </div>
          <Scissor classList = 'option selected' imgClassList = 'selectedImage' ></Scissor>
      </div>)
    )
  }
}

export default House