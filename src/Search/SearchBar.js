import React from 'react';
import { Button } from "./Button";
const ref = React.createRef();

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    onFilterTextChange (e) {
        this.props.onFilterTextChange(e.target.value)
    }

    onStockOnlyChange (e) {
        this.props.onStockOnlyChange(e.target.checked)
    }

    render () {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <div className="search-bar">
                <div className="form-field">
                    <label htmlFor="">Find your product</label>
                    {filterText}
                    <input type="text" value={filterText}
                           onChange={(e) => this.onFilterTextChange(e)}/>
                </div>
                <div className="form-field">
                    <input id='checkStock'
                        type="checkbox"
                        className="custom-checkbox hide"
                        checked={inStockOnly}
                        onChange={(e) => this.onStockOnlyChange(e)}
                    />
                    <label htmlFor="checkStock"><span className="ind"></span>Only show products in stock</label>
                </div>
            </div>
        )
    }
}