import React from 'react';
import Header from './Header';

export default class App extends React.Component {
    constructor() {
      super();
    }

    render() {
        return (
            <main>
            <Header />
            <container>
            </container>
            </main>
        )
    }
}