import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
function Navbar() {
    return (
        <div>
          <ul>
           <li> <Link to='/' className="link">Home</Link> </li>
           <li>  <Link to='/category' className="link">Category</Link></li>
           <li>  <Link to='/products' className="link">Products</Link> </li>
           <li>   <Link to='/login' className="link">Admin area</Link> </li>
              
          </ul>  
        </div>
    )
}

export default Navbar
