import React from 'react'

const Greeting = ({timeOfDay}) => {
  if(timeOfDay==="morning"){
    return <h1>Good Morning !</h1>
  }
  else if(timeOfDay==="afternoon"){
    return <h1>Good Afternoon !</h1>
  }
  else if(timeOfDay==="night"){
    return <h1>Good Night</h1>
  }
}

export default Greeting