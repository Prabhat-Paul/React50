import React from 'react'
import {accordionData} from "./Component/8.Acordions/Utils/content.js"
import Accordions from './Component/8.Acordions/Accordions.jsx'
// import Testamonials from './Component/7.Testimonials/Testamonials'
// import HiddenSearchBar from './Component/6.HiddenSrchBar/HiddenSearchBar'
// import ToggleBgColor from './Component/5.ToggleBgColor/ToggleBgColor'
// import Calculator from './Component/4.Calculator/Calculator'
// import Counter from './Component/1.Counter/Counter'
// import Todo from './Component/2.Todo/Todo'
// import Meals from './Component/3.MealsAPI/Meals'

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals/> */}
      {/* <Calculator/> */}
      {/* <ToggleBgColor /> */}
      {/* <HiddenSearchBar/> */}
      {/* <Testamonials/> */}
      
      <div className="accordion">
        {
          accordionData.map(({title,content,id})=>(
            <Accordions key={id} title={title} content={content}/>
          ))
        }
      </div>
      
    </div>
  )
}

export default App