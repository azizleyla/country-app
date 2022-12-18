import React, { Component } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

export default class Country extends Component {
    state = {
        activeCountry: [],
        borders: []
    }
    componentDidMount = async () => {
        const name = this.props.location.state.country;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`)

        this.setState({ activeCountry: response.data[0] })

    }
    render() {
        let borderhtml = "";
        const country = this.state.activeCountry;
        let { name, population, region, capital, flags, nativeName, subregion, languages = {}, borders = [], currencies = {}, tld } = country;

        let main = [];
        // const [first, second, ...mainBorders] = borders;
        let currency = Object.keys(currencies)
        const mainBorders = borders.slice(0, 3)
        let mainLanguages = Object.values(languages);

        return (

            <div className="single-card">

                <div className="single-card__row">
                    <div className="single-card__img">
                        <img src={flags?.png} alt={name} />
                    </div>
                    <div className="single-card__details">
                        <h1 className="single-card__name"></h1>
                        <div className="single-card__details__flex">
                            <div className="single-card__details--left">
                                <p>Native Name: <span>{name?.common}</span></p>
                                <p>Population: <span>{population}</span></p>
                                <p>Region: <span>{region}</span></p>
                                <p>Subregion: <span>{subregion}</span></p>
                                <p>Capital: <span>{capital}</span></p>
                            </div>
                            <div className="single-card__details--right">
                                <p>Top Level Domain: <span>{tld ? tld[0] : ""}</span></p>
                                <p>Currencies: <span>{currency && currency[0]}</span></p>
                                <p>Languages:
                                    {mainLanguages.map((language) => (
                                        <span className="language">{language}</span>
                                    ))}
                                </p>

                            </div>
                        </div>
                        <p className="domain">Border Countries:
                            {mainBorders.map((border) => (
                                <span className="border">{border}</span>
                            ))}
                        </p>

                    </div >
                </div>
                <Link to="/">
                    <a href="#" className="btn">Back </a>
                </Link>

            </div>
        )
    }
}
