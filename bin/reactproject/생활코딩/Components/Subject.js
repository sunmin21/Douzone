import {Component} from "react";
class Subject extends Component{
	render(){
		return(
			<header>
				<h1><a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>Web</a></h1>
				World Wide Web!

				<h1>{this.props.title}</h1>
				{this.props.sub}
			</header>
		);
	}
}

export default Subject;