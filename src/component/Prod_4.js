import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'

function Prod_4() {
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
                  <h2>Lee Cooper Mid Sneakers</h2>
        <p>Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.</p>   
        <h3>Out of stock</h3>
        </div>
        </div>   
        </div>
    )
}

export default Prod_4
