import React, {Component} from 'react';

class BodyContent extends Component{
	render(){
		return(
			<body>
				<h3>{this.props.title}</h3>
				{this.props.desc}<br/>
				아야어여오요우유으
			</body>
		);
	}
}

export default BodyContent;