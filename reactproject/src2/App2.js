import React, {Component} from 'react';
import TopMenu from './component/TopMenu'
import MainTitle from './component/MainTitle'
import BodyContent from './component/BodyContent'

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			subject:{title:'state로 title 값 전달', sub : 'state로 desc 값 전달'},
			contents:[
				{no:1, title:'가.....', desc:'가가가'},
				{no:2, title:'나.....', desc:'나나나'},
				{no:3, title:'다.....', desc:'다다다'}
			]
		}
	}

	render(){
		return(
			<div>
				Hello, React!!
				<MainTitle title="main title 값 전달" sub="sub title 값 전"></MainTitle>
				<TopMenu data={this.state.contents}></TopMenu>
				<BodyContent title ={this.state.subject.title} desc ={this.state.subject.sub}></BodyContent>
			</div>

		);
	}
}

export default App;