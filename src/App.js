import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';


class App extends Component{
  constructor(){
    super();
    this.state={
      inventory:[]
    }
    // this.componentDidMount=this.componentDidMount.bind(this)
  }

  componentDidMount(){
    console.log('component did mount')
    axios.get('/api/inventory').then(res=>{
      this.setState({
        inventory:res.data
      })
      console.log(res.data)
    })
  }
  
  render(){
    return (
      <div className="App">
        <Dashboard inventory={this.state.inventory}/>
        <Form get={this.componentDidMount}/>
        <Header/>
      </div>
    );
  }
}

export default App;

// componentDidMount(){
//   this.getInventory()
// }

// getInventory=()=>{
//   console.log('component did mount')
//   axios.get('/api/inventory').then(res=>{
//     this.setState({
//       inventory:res.data
//     })
//     console.log(res.data)
//   })
// }