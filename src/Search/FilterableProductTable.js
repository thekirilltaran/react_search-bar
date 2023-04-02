import React from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

export default class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: 'Search...',
            inStockOnly: false
        }
    }

    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText
        })
    }

    handleStockOnlyChange(checkInput) {
        this.setState({
            inStockOnly: checkInput
        })
    }

    render () {
        return (
            <>
                <SearchBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={(filterText)=>this.handleFilterTextChange(filterText)}
                    onStockOnlyChange={(checkInput)=>this.handleStockOnlyChange(checkInput)}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}/>
            </>
        )
    }
}