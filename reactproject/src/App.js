// App.js
import React, {Component} from 'react';
import Counter from './Components/Counter'
import Option from './Components/Option'
import Button from './Components/Button'

class App extends Component{
  render(){
    return(
      <div>
        <Counter store = {this.props.store}/>
        <Option store = {this.props.store}/>
        <Button store = {this.props.store}/>
      </div>
    );
  }
}

export default App;