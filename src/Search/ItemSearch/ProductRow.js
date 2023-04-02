import React from 'react';

export default class ProductRow extends React.Component {
    render () {
        const product = this.props.product;
        const name = this.props.product.name;
        return (
            <tr>
                <td>{ product.stocked ? <span style={{color: 'red'}}>{name}</span> : name }</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}