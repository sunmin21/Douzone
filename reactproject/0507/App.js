import React, {Component} from 'react';
import MyComponent from './MyComponent';

//props와 state 모두 하위 컴포넌트에 상속이 가능

class App extends Component{  
  state ={
    count:0,
  };

  //state는 현재 컴포넌트 안에서 새로운 데이터를 만들어 낼 때 사용
  //현재 컴포넌트 내에서 변경이 가능
  handleChange=()=>{
    this.setState({
      count:this.state.count+1,
    });
  }
/*
  handleChange=()=>{
    this.setState({
      hello:'bye~~~~'
    });

  }
*/

  render(){
      return (
          <div className="App">
            <MyComponent/>
            <h3>index props</h3>
            <div className="props">
              {/*props가 들어가는 부분*/}
              <span>{this.props.message}<br/><br/><br/></span>
            </div>

            <h3>State</h3>
            <div className="state">
              {/*state가 들어가는 부분*/}
              {this.state.count}<br/>
              <button onClick={this.handleChange}>click me!</button>
            </div>

            <h3>App Props</h3>
            <div className="inside-app-props">
              <InsideApp
                count={this.state.count}
                handleChange={this.handleChange}
              />
            </div>


          </div>
      );  
    }
}

//Props를 직접적으로 변경은 불가능 하지만, 상위 컴포넌트에서 state를 변경하는 메소드를
//props로 끌어옴으로써 간접적으로 변경이 가능
class InsideApp extends Component{
  render(){
    return(
      <div>
        {this.props.count}
        <button onClick={this.props.handleChange}>click me!!</button> 
      </div>
    );
  }
}
export default App;
