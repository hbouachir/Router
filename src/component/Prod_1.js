import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Prod_1() {
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
             <div>
                  <h2>NIKE Liteforce Blue Sneakers</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.</p>   
        <h3>Available</h3>
        </div>
        </div> 
       
        </div>
    )
}

export default Prod_1
