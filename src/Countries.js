import React, { Component } from "react";
import { Link } from "react-router-dom"
export default class Countries extends Component {

    render() {
        return (
            <div className="cards container">
                {this.props.countries.map((country) => {
                    const { numericCode, name, flag, population, region, capital } = country

                    return (
                        <div className="card" key={numericCode}>
                            <div className="card__container">
                                <div class="card__img">
                                    <img src={flag} alt={name} />
                                </div>
                                <div class="card__content">
                                    <h1 className="card__name">{name}</h1>
                                    <div className="card__details">
                                        <p>
                                            Population: <span>{population}</span>
                                        </p>
                                        <p>
                                            Region: <span>{region}</span>
                                        </p>
                                        <p>
                                            Capital: <span>{capital}</span>
                                        </p>
                                    </div>
                                </div>
                                <button type="button" className="btn-delete">
                                    <Link to={{ pathname: `/country/${name}`, state: { country: name } }}>
                                        View Country
                                    </Link>

                                </button>
                                <button type="button" className="btn-delete" onClick={() => this.props.deleteCountry(country)}>Delete</button>
                            </div>
                        </div>)
                })}
            </div>
        );
    }
}
