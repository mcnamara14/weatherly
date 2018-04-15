import React, { Component } from 'react';
import Trie from 'TDD';
import data from './cities'

export default class Location extends Component {
  constructor() {
    super();

    this.state = {
      userInputLocation: ''
    };
    this.trie = new Trie();
    this.trie.populate(data);
  }


  render() {
    console.log(this.trie)
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

