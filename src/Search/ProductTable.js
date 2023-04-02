import React from 'react';
import ProductCategoryRow from "./ItemSearch/ProductCategoryRow";
import ProductRow from "./ItemSearch/ProductRow";

export default class ProductTable extends React.Component {
    render () {
        let lastCategory = null;
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.products.filter((item) => item.stocked !== null ).map((product, index, arr) => {
                        if (product.name.indexOf(filterText) === -1) {
                            return;
                        }
                        if (inStockOnly && !product.stocked) {
                            return;
                        }
                        let item =  <>
                                {product.category !== lastCategory &&
                                    <ProductCategoryRow
                                    category={product.category}
                                    key={product.category}
                                />}

                                <ProductRow product={product}
                                        key={product.name}/>
                                </>;
                        lastCategory = product.category
                        return item;
                    })}
                </tbody>
            </table>
        )
    }
}