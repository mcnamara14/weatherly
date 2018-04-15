import React, { Component } from 'react';
import Trie from 'TDD';
import data from './cities'

export default class Location extends Component {
  constructor() {
    super();

    this.state = {
      userInputLocation: '',
      suggestions: []
    };
    this.trie = new Trie();
    this.trie.populate(data);
  }

  render() {
    return(
      <div>
      <input 
        list="cities"
        value={this.state.userInputLocation}
        onChange={event => {
          this.setState({suggestions: this.trie.suggest(event.target.value)});
          return this.setState({userInputLocation: event.target.value});
        }}
        placeholder='+ Enter Location'
        onKeyPress={target => {
          if(target.charCode === 13) {
            this.props.updateLocation(this.state.userInputLocation);
          }
        }} />
      <datalist id="cities">
        {this.state.suggestions.map(city => <option value={city} /> )}
      </datalist> 
      </div>
    )
  }
}


