import { Component } from "react";

class TOC extends Component{
    render(){
        var data=this.props.data;
        var lists=[];
        var i=0;
        while(i<data.length){
            lists.push(<li key={data[i].id}><a href={"/content/"+data[i].id}
            onClick={function(e){
                e.preventDefault();
            }
            >{data[i].title}</a></li>);
            i=i+1;
        }

        return(
            <nav>
                <ul>
                    {lists}
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}

export default TOC;