import React, {Component} from 'react';

class TopMenu extends Component{
	render(){
		var lists=[];
		var data = this.props.data;
		var i=0;
		while(i<data.length){
			lists.push(
				<li key={data[i].no}>
					<a href={"/content/"+data[i].no} 
					data-no={data[i].no}
						onClick={function(e){
							e.preventDefault();
							this.props.onChangePage();
						}.bind(this)}>{data[i].title}</a>
				</li>
			);
			i=i+1;
		}

		return(
			<body>
				<ul>
					{lists}
				</ul>
			</body>
		);
	}
}

export default TopMenu;