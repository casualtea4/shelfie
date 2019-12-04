import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:0,
            img:''
        }
    }
    nameInput(e){
        this.setState({
            name:e.target.value
        })
        // console.log(this.state.name)
    }

    priceInput(e){
        this.setState({
            price:e.target.value
        })
        // console.log(this.state.price)
    }

    imgInput(e){
        this.setState({
            img:e.target.value
        })
        // console.log(this.state.img)
    }

    cancel=()=>{
        this.setState({
            name:'',
            price:0,
            img:''
        })
    }

    add=(body)=>{
        console.log('add was clicked')
        axios.post('/api/product', body).then(res=>{
            console.log(res)
            this.setState({
                name:res.config.data,
                price:res.config.data,
                img:res.config.data
            })
            // console.log('add method finished')
            console.log(this.state.name)
            console.log(this.state.price)
            console.log(this.state.img)
        })
        // props
        // cancel
    }

    render(){
        return(
            <div>
                Form
                <input onChange={e=> this.nameInput(e)} placeholder='product name' value={this.state.name}/>
                <input onChange={e=> this.priceInput(e)} placeholder='price' value={this.state.price}/>
                <input onChange={e=> this.imgInput(e)} placeholder='img url' value={this.state.img}/>
                <button onClick={this.cancel}>Cancel </button>
                {/* <button onClick={()=>this.add({name,price,img})}>Add</button> */}
                {/* <button onClick={()=>this.add(this.state.name,this.state.price,this.state.img)}>Add to Inventory</button> */}
                <button onClick={()=>this.add(1)}>Add to Inventory</button>
                {/* {this.state.name} */}
            </div>
        )
    }
}

export default Form