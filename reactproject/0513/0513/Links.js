import React from 'react';
import {Link, NavLink, Route} from 'react-router-dom';

 const Links = () =>{
	    const activeStyle={
        background:'green',
        color:'white'
    }; 
	
	return(
		<>
			<h1>a</h1>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
			</ul>
			<h1>Link</h1>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/about/foo">About</Link></li>
			</ul>
			
			<h1>NavLink</h1>
			<ul>
				<li><NavLink to="/" activeStyle={activeStyle}>Home</NavLink></li>
				<li><NavLink to="/about" activeStyle={activeStyle}>About</NavLink></li>
				<li><NavLink to="/about/foo" activeStyle={activeStyle}>About foo</NavLink></li>
			</ul>
		</>
	); 
} 

export default Links;