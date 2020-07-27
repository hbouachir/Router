import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home';
import Category from './component/Category';
import Products from './component/Products';
import Admin_Area from './component/Admin_Area';
import Shoes from './component/Shoes';
import Boots from './component/Boots';
import Footwear from './component/Footwear';
import Prod_1 from './component/Prod_1';
import Prod_2 from './component/Prod_2';
import Prod_3 from './component/Prod_3';
import Prod_4 from './component/Prod_4';

import './App.css';

function App() {
  return (



<BrowserRouter>
<Route exact path='/' component={Home}/>
<Route path='/category' component={Category}/>
<Route exact path='/products' component={Products}/>
<Route path='/login' component={Admin_Area}/>
<Route path='/category/shoes' component={Shoes}/>
<Route path='/category/boots' component={Boots}/>
<Route path='/category/footwear' component={Footwear}/>
<Route path='/products/1' component={Prod_1}/>
<Route path='/products/2' component={Prod_2}/>
<Route path='/products/3' component={Prod_3}/>
<Route path='/products/4' component={Prod_4}/>



</BrowserRouter>




  );
}

export default App;
