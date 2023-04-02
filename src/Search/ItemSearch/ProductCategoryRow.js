import React from 'react';

export default class ProductCategoryRow extends React.Component {
    render () {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2" style={{textAlign: 'left'}}>
                    {category}
                </th>
            </tr>
        )
    }
}