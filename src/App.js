import './App.css';
import Form from "./components/Form";
import store from "./redux/store";
import {addToList} from "./redux/actions";
import { Component } from 'react';
import Card from "./components/Card";

console.log(store.getState());

class App extends Component{
constructor(){
  super();
  this.state = {
    name:"",
    value:'',
    display:true,
    list:[]
  }
}

removeHandler = () => {
   this.setState({
     display:false
   })
}

addRowHandler = () => {
    this.setState({
      display:true
    })
}

 handleSubmit = () => {
  store.dispatch(addToList(this.state))
  console.log(store.getState());
  this.setState({
    list:store.getState().formList
  })
}

handleChange = (e) => {
  //console.log(e.target.value);
    this.setState({
      ...this.state,
      [e.target.name]:e.target.value
    })
}

render(){
  return (
    <div className="App">
      {
       this.state.display?
      <Form handleChange={this.handleChange} />:null
      }
      <div className="buttons">
        <button className="btn" onClick={this.removeHandler}>Remove</button>
        <button className="btn" onClick={this.addRowHandler}>Add Row</button>
        <button className="btn" onClick={this.handleSubmit}>CreateCard</button>
      </div>
      <div className="container">
       {
       this.state.list ? this.state.list.map(el => (
         <Card name={el.name} value={el.value} />
       )):null
      }
      </div>
    </div>
  );
}
}

export default App;
