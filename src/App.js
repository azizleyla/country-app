import React, { Component } from "react";
import Countries from "./Countries";
import SearchBar from "./SearchBar";
import Headers from "./Headers";
import axios from "axios";

export default class App extends Component {
  state = {
    countries: [],
    searchQuery: "",
    filterQuery: "",
  };
  componentDidMount() {
    this.getCountries();
  }
  searchCountry = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  filterCountry = (e) => {
    this.setState({ filterQuery: e.target.value });
  };
  deleteCountry = async (country) => {
    axios.delete(
      `https://restcountries.eu/rest/v2/all/${country.numericCode}`,
    );

    const newCountry = this.state.countries.filter(
      (c) => c.numericCode !== country.numericCode,
    );
    console.log(newCountry);
    this.setState({ countries: newCountry });
  };
  getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v2/all");

    this.setState({ countries: response.data });
  };

  DarkAndLightMode = () => {
    document.body.classList.toggle("darkMode");
  };
  render() {
    const { searchQuery, filterQuery, countries } = this.state;
    let resultFilter = [];
    if (filterQuery !== "") {
      countries.map((country) => {
        if (country.region === filterQuery) {
          resultFilter.push(country);
          return resultFilter;
        }
      });
    }
    if (searchQuery !== "") {
      resultFilter = [];
    }
    let searchedCountries = this.state.countries.filter((country) => {
      return (
        country.name
          .toLowerCase()
          .indexOf(this.state.searchQuery.toLowerCase()) !== -1
      );
    });

    // let filteredCountries = this.state.countries.filter(
    //   (country) => {
    //     return (this.state.filterQuery === country.region)
    //   })bu sehv yolduda countriese gondermisem yeni searched i
    return (
      <div>
        <Headers DarkAndLightMode={this.DarkAndLightMode} />
        <SearchBar
          searchCountry={this.searchCountry}
          filterCountry={this.filterCountry}
        />
        {resultFilter.length !== 0 ? (
          <Countries
            deleteCountry={this.deleteCountry}
            countries={resultFilter}
          />
        ) : (
          <Countries
            deleteCountry={this.deleteCountry}
            countries={searchedCountries}
          />
        )}
      </div>
    );
  }
}
