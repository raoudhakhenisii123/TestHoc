import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={
     items:[],
     isloaded:false
    }
  }
  // changedyt(){
  //   this.setState({isloaded:true, items:})
  // }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users/")
    .then(response=>response.json())
    .then(items=>{console.log(items)});
    // .then(json=>{this.setState({ isloaded:true, items:json})});
  }
  render(){
    var {isloaded, items} =this.state;
    if(isloaded){
      return <div>loading...</div>
    }
    else
  return (
    <div className="App">
      <ul>
  {items.map(item=>(<li key={item.id}> Name:{item.name} | Email:{item.email}|adress:{item.address}</li>))}
      </ul>
    </div>
  );
}}

export default App;
