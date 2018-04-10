import React from 'react';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      inputWhere: ''
    };
    this.updateWhere = this.updateWhere.bind(this);
  }

  updateWhere(event) {
    this.setState({ inputWhere: event.target.value })
  }
    render() {
        return (
            <header>
                <div>
                <img className="logo" src="./assets/weatherly-logo.png"/>
                <input value={this.state.inputWhere} onChange={this.updateWhere} />
                </div>
            </header>
        )
    }
}