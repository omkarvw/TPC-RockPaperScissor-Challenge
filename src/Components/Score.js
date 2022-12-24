import React from 'react'

function Score(props) {

  // const [mounted , setMounted] = React.useState(false);

  // React.useEffect(() => {
  //   setTimeout(() => setMounted(true), 1000);
  // })

  return (
    // mounted &&
    (<div id='scoreCard'>
       <span id='scoreText'>SCORE</span>
        <div id='score'>{props.scoreCounter}</div>
        {/* <div id='score'>12</div> */}
    </div>)
  )
}

export default Score