import React, {Component} from 'react';
import TopMenu from './component/TopMenu'
import MainTitle from './component/MainTitle'
import BodyContent from './component/BodyContent'

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			option:'read',
			subject:{title:'state로 title 값 전달', sub : 'state로 desc 값 전달'},
			welcom:{title:'welcome', sub:'Hello, react!!'},
			contents:[
				{no:1, title:'가.....', desc:'가가가'},
				{no:2, title:'나.....', desc:'나나나'},
				{no:3, title:'다.....', desc:'다다다'}
			]
		}
	}

	render(){
		var _title, _desc = null;
		if(this.state.option === 'welcome') {
			_title = this.state.welcom.title;
			_desc = this.state.welcom.desc;
		} else if( this.state.option === 'read' ) {
			_title = this.state.contents[0].title;
			_desc = this.state.contents[0].desc;
		}

		return(
			<div>
				Hello, React!!
				<MainTitle title="main title 값 전달" sub="sub title 값 전"></MainTitle>
				<TopMenu data={this.state.contents}></TopMenu>
				<header>
					<h1>
						
						<a href="/" onClick={function(e){
							e.preventDefault();
							this.setState({
								option:'welcome'
							});

						}.bind(this)}>{this.state.subject.title}</a>
					
					</h1>
				</header>
				sub={this.state.subject.sub}
				onchangePage={function(){
					this.setState({option:'welcome'})
				}.bind(this)}

				<BodyContent title ={this.state.subject.title} desc ={this.state.subject.sub}></BodyContent>
			</div>

		);
	}
}

export default App;