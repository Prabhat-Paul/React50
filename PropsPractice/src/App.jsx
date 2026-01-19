import React from 'react'
import Product from './componentsWithProps/Product';
import Card from './componentsWithProps/Card';
import User from './componentsWithProps/User';

const App = () => {
  return (
    <section>
       <User 
      img ="https://media.licdn.com/dms/image/v2/D5603AQFdT6BkqyYXzQ/profile-displayphoto-crop_800_800/B56ZshXLUZG8AI-/0/1765791284009?e=1769644800&v=beta&t=J6I5DXeJmi2rss8bW7jezqeNePhMm1vQnlYONRpWMJo"
      name="Prabhat Paul" 
      age={24} 
      isMarried = {false}
      />

     <Product name="Laptop"
      price={45000}
      brand="Dell"
     />

     <Card> 
      <h1>Card Component 1</h1>
      <h2>This is card component using children props</h2>
     </Card>

     
    </section>
   
   


  )
}



export default App;