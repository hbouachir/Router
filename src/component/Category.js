import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom'
import '../App.css'
function Category() {
    return (
        <div>
       <Navbar/>
   <ul>
   <li> <Link to='/category/shoes' className="link">Shoes</Link> </li>
   <li>  <Link to='/category/boots' className="link">Boots</Link></li>
  <li>  <Link to='/category/footwear' className="link">Footwear</Link> </li>


   </ul>
        </div>
    )
}

export default Category
