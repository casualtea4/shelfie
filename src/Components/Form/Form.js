import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:0,
            imgurl:''
        }
    }
    nameInput(e){
        console.log(e)
        this.setState({
            name:e.target.value
        })
    }

    priceInput(e){
        this.setState({
            name:e.target.value
        })
    }

    imgInput(e){
        this.setState({
            name:e.target.value
        })
    }

    cancel=()=>{
        this.setState({
            name:'',
            price:0,
            imgurl:''
        })
    }

    add(body){
        console.log('add was clicked')
        axios.post('/api/product',body).then(res=>{
            console.log('axios post fired')
            console.log(res)
            this.setState({
                name:res.data,
                price:res.data,
                imgurl:res.data
            })
            console.log(this.state.name)
        })
        // this.props.get
        // this.cancel()
    }

    render(){
        return(
            <div>
                Form
                <input onChange={e=> this.nameInput(e)} placeholder='product name' value={this.state.name}/>
                {/* value={this.state.name} */}
                <input onChange={e=> this.priceInput(e)} placeholder='price' value={this.state.price}/>
                <input onChange={e=> this.imgInput(e)} placeholder='img url' value={this.state.imgurl}/>
                <button onClick={this.cancel}>Cancel </button>
                <button onClick={()=>this.add(this.state.name,this.state.price,this.state.imgurl)}>Add</button>
                {/* {this.state.name} */}
            </div>
        )
    }
}

export default Form