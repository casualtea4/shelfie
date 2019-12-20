import React, {Component} from 'react'
import Product from '../Product/Product'
import axios from 'axios';

class Dashboard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         edit: null
    //     }
    // }

    delete = (id) => {
        axios.delete(`/api/product/${id}`).then(this.props.get())
        
    }

    
    render(){
        let list = this.props.inventory.map((e,i) => {
            return(
                <Product
                    key ={i}
                    product = {e}
                    name = {e.name}
                    price = {e.price}
                    img = {e.img}
                    deleteFn = {this.delete}
                    id = {e.id}
                    select = {this.props.selectFn}
                    />
            )
         })
        return(
            <div>        
                {list}
            </div>
        )
    }
}

export default Dashboard

{/* <Product list={this.props.inventory.map((e,i)=>(
            <div key={i}>
                <h1>{e.name}</h1>
                <br/>
                <h3>${e.price}</h3>
                <br/>
                <img src = {e.img} alt = 'pic'/>
            <button 
            onClick={() => this.props.selectFn(e)}> edit </button>
            <button
            onClick={() => this.delete(e.id)}>delete</button>
            </div>
        ))}/>
                {/* {console.log(this.props.inventory)} */}
                // */}