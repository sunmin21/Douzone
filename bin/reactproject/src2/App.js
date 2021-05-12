import React, { Component } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper'
import Counter from './Counter'
import InputExam from './InputExam'

function App(){
	const name = 'react';
	const style={
		backgroundColor:'pink',
		color:'lightyellow'

	}

	return(
/* 		<React.Fragment>
			<Hello irum="sunmin" color='red'/>
			<Hello/>
			<Hello/>
			<div>반갑습니다</div>
			
			<div style={style}>{name}</div>
		</React.Fragment> */
/* 		<Wrapper>
			<Hello irum="sunmin" color='red' isSpecial={true} />
			<Hello color='blue'/>
		</Wrapper> */
		<div>
			<Counter/>
			<InputExam/>
		</div>
	);
}

export default App;


