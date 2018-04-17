import React, { Component } from 'react';
import Location from './Location';
import ErrorHandler from './ErrorHandler';

export default function Header(props) {

    return (
        <header>
            <ErrorHandler />
            <div>
                <img className="logo" src="./assets/weatherly-logo.png"/>
                <Location updateLocation={props.updateLocation} welcomeStatus={props.welcome}/>
            </div>
        </header>
    )
}
