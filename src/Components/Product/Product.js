import React, {Component} from 'react'

class Product extends Component {
    render(){
        return(
            <div>
                Product
                {this.props.list}
            </div>
        )
    }
}

export default Product