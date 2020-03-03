import React, { Component } from 'react';
import './App.css';
// import List from './list'
// import  Itemtodo from './item';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
import Inputtodo from './inputodo';
import '../node_modules/font-awesome/css/font-awesome.min.css';

class App extends Component{
//   constructor(props){
//     super(props);
//  this.state={
//     items:[], 
//     item:"",
//     id:uuid(),
//     edititem:false

//   }
// }
  // handlesubmit=e=>{
    // e.prevendefault();
  //   const newitem={
  //     id:this.state.id,
  //     title:this.state.item
  // }



  // handleChange=(e)=>{
  //   this.setState({item:e.target.value})
  // }
  // addtodo=(event)=>{
  // event.preventDefault();
  //   this.setState({ item:'', items:[...this.state.items,this.state.item]})
  // }
  // deleteitem=(event)=>{
  //   event.preventDefault();
  //   const array=this.state.items;
  //   const index=array.indexOf(event.target.value)
  //   array.splice(index,1)
  //   this.setState({items:array})
  // }
  // editItems=id=>{
  //   const filtreditems=this.state.items.filter(item=>item.id!==id)
  //   const seletecitem=this.state.items.find(item=>item.id===id)
  //   this.setState({items:filtreditems,
  //        item:seletecitem.item,
  //        edititem:true })
  // }
rendertodo(){
  return <ul className="list-group my-5"> 
  {this.state.items.map(item =>{
  // return (<Itemtodo key={item.id}>{item} </Itemtodo>)})}
    return <form>
    <div className="list-group mb-3">
      <div className="list-group-prepend">
        <div className="list-group-text">
          <li type="checkbox"> 
    <li className="list-group-item text-capitalize d-flex justify-content-between my-2" type="radio" key={item.id}>
       {item}  
       <div className="todo-icon">
           <span className="float-left">
          <button onClick={this.editItems}>
           <span className="mx-2 text-success"> 
           <i className="fa fa-pencil"></i>
           </span>
           </button>
           <button onClick={this.deleteitem}>
           <span className="mx-2 text-danger">
           <i className="fa fa-trash"></i>
           </span>
           </button>
           </span>
           </div>  
           </li>
           </li>
           </div>
           </div>
           </div>
           </form>
           })} 
    </ul>
}
 render(){
  return (
        <div className="container">
       <div className="row"> 
        <div className="col-10 mx-auto col-md-8 mt-4">
        
        {/* <Inputtodo item={this.state.item}
         handlesubmit={this.handlesubmit} 
         handleChange={this.handleChange} 
         addtodo={this.addtodo}/> */}
         <Inputtodo/>
        {/* <List  items={this.state.items} 
         item={this.state.item}/> */}

         {this.rendertodo()}
        

        </div>
       </div> 
     </div>
  );
}}

export default App;
