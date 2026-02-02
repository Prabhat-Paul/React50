import { useState } from 'react'
import Navigation from './Navigation/Navigation.jsx'
import Product from './Products/Products.jsx'
import Recommended from './Recommended/Recommended.jsx'
import Sidebar from './Sidebar/Sidebar.jsx'
import './main.css'
//Database
import products from './DB/data.jsx'
import Card from './Components/Card.jsx'

const App = () => {
  const [selectedCategory,setSelectedCategory] = useState(null)
  const[query,setQuery]= useState('');

  //-----------Input Filter--------------

  const handleInputChange = (event) =>{
    setQuery(event.target.value)
  };

  const filtereditems = products.filter(product=>product.title.toLowerCase().indexOf(query.toLowerCase())!==-1
  );

   //-----------Radio Filter--------------
  const handleChange = (event) =>{
    setSelectedCategory(event.target.value)
  }

  //-----------Button Filter---------------
  const handleClick = (event) =>{
    setSelectedCategory(event.target.value)
  }

  function filteredData(products,selected,query){
    let filterProducts = products

    //filtering Input Items
    if(query){
      filterProducts=filtereditems
    }

    //Selected Filter
    if(selected){
      filterProducts=filterProducts.filter(({category, color, company, newPrice,title})=>
        category===selected||
        color===selected||
        company===selected||
        newPrice===selected|| 
        title===selected
      );
    }

    return filterProducts.map(({img,title,star,reviews,newPrice,prevPrice})=>(
      <Card 
        key={Math.random}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ))
  }

  const result = filteredData(products,selectedCategory,query);
  return (
    <>
      <Sidebar handleChange={handleChange}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Product result={result}/> 
    </>
  )
}

export default App