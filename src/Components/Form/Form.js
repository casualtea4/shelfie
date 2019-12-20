import React, {Component} from 'react'
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            price:0,
            img:'',
            id: '',
            edit: false
        }
    }

    componentDidUpdate(oldProps){
        let {id,name,price,img} = this.props.editProduct
        if(oldProps.editProduct.id !== this.props.editProduct.id){
            this.setState({
                name,price,img,id,edit:true
            })
        }
    }

    handleInput=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    cancel=()=>{
        this.setState({
            name:'',
            price:0,
            img:'',
            edit:!this.state.edit
        })
    }

    add=()=>{
        const {name,price,img} = this.state;
        // console.log('add was clicked')
        axios.post('/api/product', {name,price,img} ).then(res=>{
            console.log(res.data)
            this.setState({
                inventory: res.data
            })
            this.props.get();
            this.cancel();
        })
        
    }

    save = () => {
        const {name,price,img} = this.state;
        const {id} = this.props.editProduct;
        this.props.editFn(id,{name,price,img})
        this.props.get()
        this.cancel()
        this.setState({
            edit: !this.state.edit
        })

    }

    render(){
        return(
            <div>
                Form
                <div>
                <input onChange={e=> this.handleInput(e)} placeholder='product name' 
                value={this.state.name}
                name='name'/>
                <input onChange={e=> this.handleInput(e)}
                placeholder='price'
                value={this.state.price}
                name='price'/>
                <input onChange={e=> this.handleInput(e)}
                 placeholder='img url'
                 value={this.state.img}
                 name='img'/>
                </div>

                <div>
                <button onClick={this.cancel}>Cancel </button>
                {!this.state.edit? <button onClick={()=> this.add()}>add to inventory</button>:<button onClick={()=>this.save()}>save changes</button>}
                </div>
            </div>
        )
    }
}

export default Form



 // nameInput(e){
    //     this.setState({
    //         name:e.target.value
    //     })
    //     // console.log(this.state.name)
    // }

    // priceInput(e){
    //     this.setState({
    //         price:e.target.value
    //     })
    //     // console.log(this.state.price)
    // }

    // imgInput(e){
    //     this.setState({
    //         img:e.target.value
    //     })
    //     // console.log(this.state.img)
    // }