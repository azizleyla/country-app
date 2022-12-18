import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "./App"
import Country from "./Country"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/country/:id" component={Country} />
            </Switch>
        </BrowserRouter>
    )
}
export default Router