import React, { Component } from 'react';
import List from './listofmovies'
import withloading from './withloading'
import './App.css';

class App extends Component {
constructor(props){
super(props)
this.state={
  isloading:true,
  // films:[{title : "inception " , id:1}, {title : "harry otter " , id:2}]
  films :[]
}
setTimeout(()=> {this.setState({isloading : false})} , 5000)

}

componentDidMount(){
  fetch("https://swapi.co/api/films")
  .then((response) => response.json())
  .then((films)=> {this.setState({ films:films.results})})
}
  render(){
 return(
   <List isloading={this.state.isloading}  films={this.state.films}/>
 )
    
 
}}

export default App;
