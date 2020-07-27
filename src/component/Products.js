import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import '../App.css'
function Products() {
    return (
        <div>
         <Navbar/>  
         <div className="Flex">
            <div className='gris'>
             <h2>Products</h2>
             <ul>
   <li> <Link to='/products/1' className="link">NIKE Liteforce Blue Sneakers</Link> </li>
   <li>  <Link to='/products/2' className="link">U.S. POLO ASSN. Slippers</Link></li>
  <li>  <Link to='/products/3' className="link">ADIDAS Adispree Running Shoes</Link> </li>
  <li>  <Link to='/products/4' className="link">Lee Cooper Mid Sneakers</Link> </li>

   </ul>
             </div>
             <div><p>Please select a product.</p></div>
        </div> 
        </div>
    )
}

export default Products
