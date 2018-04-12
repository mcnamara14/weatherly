import React, { Component } from 'react';

export default class Location extends Component {
  constructor() {
    super();

    this.state = {
      userInputLocation: ''
    };
  }

  render() {
    return(
      <input 
        value={this.state.userInputLocation}
        onChange={event => this.setState({userInputLocation: event.target.value})}
        placeholder='+ Enter Location'
        onKeyPress={target => {
          if(target.charCode === 13) {
            this.props.updateLocation(this.state.userInputLocation);
          }
        }} />
    )
  }
}