import React, {Component} from 'react';

class MyComponent extends Component{
	//state 기본 값 설정. transform-class-properties 문법
  static defaultProps={
    name:'sunmin'
  };

  render(){
	  return(
		  <div>
			  안녕하세요 내 이름은 {this.props.name}입니다.<br/>
			  나이는 {this.props.age}
		  </div>
	  );
  }

}
/* 
class 안에 선언된 static defaultProps와 동시에 사용 불가
MyComponent.defaultProps ={
	age:29
} */

export default MyComponent;