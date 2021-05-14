import React from 'react';
import LoginButton from './LoginButton'

export default function Login(props){

	function login(){
		setTimeout(()=>{
			props.history.push('/');
		},1000);
	}

	return(
		<div>
			<h2>Login 페이지 입니다.</h2>
			<LoginButton {...props}/>
		</div>
	);

}