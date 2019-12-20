import React, {Component} from 'react'

class Product extends Component {
    render(){
        const {img,name,price,id} = this.props
        return(
            <div>
                <h1>{name}</h1>        
                <h3>${price}</h3>
                <img src = {img} alt = 'pic' height='250px'/>
                <br/>
                <button onClick={() => this.props.deleteFn(id)}>delete</button>
                <button onClick={()=>this.props.select(this.props.product)}>edit</button>
            </div>
        )
    }
}

export default Product