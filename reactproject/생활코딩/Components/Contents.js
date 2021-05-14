import {Component} from "react";

class Contents extends Component{
    render(){
        console.log('contents render')
        return(
            <div>
            <h1>{this.props.title}</h1>
				{this.props.desc}
            </div>
        );
    }

}

export default Contents;