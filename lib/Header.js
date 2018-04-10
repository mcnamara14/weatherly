import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <div>
                <img className="logo" src="./assets/weatherly-logo.png"/>
                </div>
            </header>
        )
    }
}