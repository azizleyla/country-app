import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="container">
                <div className="search">
                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input onChange={this.props.searchCountry} name="country" type="text" className="search-bar-input" id="search-input"
                            placeholder="Search for country" />
                    </div>
                    <select onChange={this.props.filterCountry} className="search-filter">
                        <option value="default">Filter By Region</option>
                        <option value="Americas">Americas</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
            </div>


        )
    }
}
