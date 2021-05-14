import React, { Component } from 'react';
import TOC from "./Components/TOC"
import Contents from "./Components/Contents"
import Subject from "./Components/Subject"


class App extends Component{
	constructor(props){
		//constroctor가 있으면 제일 먼저 실행되서 초기화를 해준다
		super(props);
		this.state={
			subject:{title:'WEB', sub:'World wide web'},
			contents:[
				{id:1, title:'HTML', desc:'HTML is HyperText'},
				{id:2, title:'CSS', desc:'HTML is HyperText'},
				{id:3, title:'JavaScript', desc:'HTML is HyperText'}
			],
			mode:'read',
			welcome:{title:'welcome', desc:'Hello React'}
		}
	}
	//바깥(index.js)에서 데이터를 알 수 없게 만드는게 잘 만든 코드이다.
	//외부에서 알 필요가 없는 정보를 철저하게 은닉하는게 중요.
	//app 내부적으로 사용할 데이터는 state로 만든다
	//상위 컴포넌트인 App의 상태를 하위 컴퍼넌트로 전달하고 싶을때는, 
	//상위 컴포넌트 스테이트 값을 하위 컴포넌트의 프롭스의 값으로 ㅓㄴ달하는 것은 가능

	//this.state는 스테이트 값을 초기화 해주는 것이다.

	//render는 어떤 html을 그릴것인가를 결정하는 함수
	//프롭스의 값이나 스테이트의 값이 바뀌면 해당되는 ㅓㅁ포넌트의 렌더함수가 호출된다.
	render(){
		console.log("App Render")
		var _title, _desc = null;
		if(this.state.mode === 'welcome'){
			_title=this.state.welcome.title;
			_desc=this.state.welcome.desc;
		}
		else if(this.state.mode === 'read'){
			_title=this.state.contents[0].title;
			_desc=this.state.contents[0].desc;
		}
		console.log("render",this)
		return(
			<div className="App">
				{/* <Subject title={this.state.subject.title} sub ={this.state.subject.sub}></Subject> */}
				<Subject title="React" sub ="for UI"
				onChangePage={function(){
					this.setState({mode:'welcome'});
				}.bind(this)}
				></Subject>
				
				{/* <header>
				<h1><a href="/" onClick={function(e){
					console.log(e); 
					e.preventDefault();//a tag의 기본적인 동작을 막는다
					//this.state.mode='welcome';		//이렇게 값을 변경하면 react 몰래 값을 변경한거나 마찬가지
					this.setState({
						mode:'welcome'
					});
					//bind(this)를 사용함으로써 this는 이 함수에서의 컴포넌트가 된다
				}.bind(this)}>{this.state.subject.title}</a></h1>
				{this.state.subject.sub}
				</header> */}
				
				<TOC onChangePage={function(){
					alert('hi');
				}.bind()}data={this.state.contents}></TOC>
				<Contents title={_title} desc={_desc}></Contents>
			</div>
		);
	}
}

export default App;


