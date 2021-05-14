import React from "react";

function Hello({irum, color, isSpecial}){
/*  	console.log(props);  */
	return <div style={{color:color}}>
		{isSpecial ? <b>#</b>:null}
		
		Hello~{irum}</div>
}

export default Hello; 