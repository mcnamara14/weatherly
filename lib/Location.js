import React, { Component } from 'react';
import Trie from 'TDD';
import data from './cities'

const trie = new Trie();
trie.populate(data);

export default class Location extends Component {
  constructor() {
    super();

    this.state = {
      userInputLocation: '',
      suggestions: []
    };
  }

  render() {
    return(
      <section className="locationInput">
      <span>
        <input 
          list="cities"
          value={this.state.userInputLocation}
          onChange={event => {
          this.setState({suggestions: trie.suggest(event.target.value)});
          return this.setState({userInputLocation: event.target.value});
          }}
          placeholder='+ Enter Location'
          onKeyPress={target => {
            if(target.charCode === 13) {
              this.props.updateLocation(this.state.userInputLocation);
              this.props.toggleWelcome();
            }
          }} />
        <datalist id="cities">
          {this.state.suggestions.map(city => <option value={city} /> )}
        </datalist>
      </span>
      <button className="submitBtn" onClick={() => {
              this.props.updateLocation(this.state.userInputLocation);
              this.props.toggleWelcome();
        }}>Submit</button>
      </section>
    )
  }
}

