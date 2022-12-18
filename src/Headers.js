import React from "react"

const Headers = (props) => {
    return (
        <header className="header">
            <div class="header__content container">
                <h1 class="header__text">Where in the world?</h1>
                <div class="header__mode">
                    <div className="header__mode-icon">
                        <i className="fas fa-moon" id="mode" onClick={() => props.DarkAndLightMode}></i>
                    </div>
                    <p className="header__mode-text">Light Mode</p>
                </div>
            </div>
        </header>
    )
}
export default Headers