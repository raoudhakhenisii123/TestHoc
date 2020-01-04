import React, {Component} from 'react';
import './App.css';

class App extends {Component} {
  constructor(props){
    super(props)
    this.state={
      caracter:{}
    }
  }
    componentDidMount(){
      fetch("https://swapi.co/api/people/1")
      .then(response=>response.json())
      .then(data=> {this.setstate({caracter:data})}
        )
    }
  
  render(){
  return (
    <div className="App">
      {this.state.caracter.name}
    </div>
  );
}
}
export default App;
