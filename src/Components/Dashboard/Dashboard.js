import React, {Component} from 'react'
import Product from '../Product/Product'

class Dashboard extends Component {
    
    render(){
        
        return(
            <div>
                Dashboard
                <Product list={this.props.inventory.map((e,i)=>(
            <h3 key={i}>{e.name} {e.price} {e.img}</h3>
        ))}/>
                {console.log(this.props.inventory)}
                
            </div>
        )
    }
}

export default Dashboard