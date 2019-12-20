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
      inventory:[],
      editProduct: {}
    }
  }

  componentDidMount=()=>{
    // console.log('component did mount')
    this.getInventory()
  }

  getInventory = () => {
    axios.get('/api/inventory').then(res=>{
      this.setState({
        inventory:res.data
      })
    })
  }

  selectProduct =(i)=>{
    this.setState({
      editProduct:i
    })
  }

  edit = (id,body) => {
    axios.put(`/api/product/${id}`, body).then(res=>{
      this.setState({
        inventory: res.data
      })
    })
  }
  
  render(){
    console.log(this.state.inventory)
    return (
      <div className="App">
        <Header/>
        <Dashboard 
        inventory={this.state.inventory} 
        get={this.componentDidMount} 
        selectFn ={ this.selectProduct}/>
        <Form 
        get={this.componentDidMount} 
        editProduct = {this.state.editProduct} 
        editFn = {this.edit}/>
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