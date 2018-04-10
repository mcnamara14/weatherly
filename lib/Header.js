import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
  
  }

    render() {
        return (
            <header>
                <div>
                <img className="logo" src="./assets/weatherly-logo.png"/>
                <input placeholder='+ Enter Location' />

                {/* <button onClick={(event) => {
                this.props.filterQuestions(this.state);
                }}>Filter Questions</button>
                 */}
                 </div>
            </header>
        )
    }
}