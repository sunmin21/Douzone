// App.js
import React, {Component} from 'react';
import {BrowserRouter,Route, Switch,NavLink} from 'react-router-dom'
import About from './0513/About'
import Home from './0513/Home';
import Profile from './0513/Profile';
import Links from './0513/Links';
import NotFound from './0513/NotFound';
import Login from './0513/Login'
import Science from './Naver/Science'
import Living from './Naver/Living'
import Recipe from './Naver/Recipe'
//import "./Naver/Naver.css"

class App extends Component{

  render(){
    return(


			// <BrowserRouter>
			// 	<ul className="ul">
			// 		<li><NavLink exact to="/Science" className="category">과학</NavLink></li>
			// 		<li><NavLink exact to="/Living" className="category">리빙</NavLink></li>
			// 		<li><NavLink exact to="/Recipe" className="category">레시피</NavLink></li>
			// 	</ul>


			// 	<br/>
			// 	<Switch>
			// 	<Route exact path='/Science' component={Science}></Route>
			// 	<Route path='/Living' component={Living}></Route>
			// 	<Route path='/Recipe' component={Recipe}></Route>
			// 	</Switch>
      // </BrowserRouter>
      

       <BrowserRouter> 



        <h1>Route path</h1>
        <Links></Links>
        <Login></Login>
        <Switch>
          <Route path='/profile/:id' component={Profile}></Route>
          <Route path='/profile' component={Profile}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/' exact component={Home}></Route>
          <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>  

 
    );
  }
}

export default App;