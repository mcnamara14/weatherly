import React, { Component } from 'react';
import Trie from 'TDD';
import data from './cities';
import key from './key.js';

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

  setLocation(location) {
    this.setState({suggestions: trie.suggest(location)});
    this.setState({userInputLocation: location});
  }

  render() {
    return (
      <section className="locationInput">
      <span>
        <input 
          list="cities"
          value={this.state.userInputLocation}
          onChange={event => {
            if (event.target.value.length === 5 && /\d/.test(event.target.value)) {
              fetch(`http://api.wunderground.com/api/${key}/geolookup/q/${event.target.value}.json`)
              .then(data => data.json())
              .then(data => {
                this.setLocation(`${data.location.city}, ${data.location.state}`);
              });
            }
            this.setLocation(event.target.value);
          }}
          placeholder='+ Enter Location'
          onKeyPress={target => {
            if (target.charCode === 13) {
              trie.select(this.state.userInputLocation);
              this.props.updateLocation(this.state.userInputLocation);
              this.props.toggleWelcome();
            }
          }} />
        <datalist id="cities">
          {this.state.suggestions.map((city, index) => <option value={city} key={index}/> )}
        </datalist>
      </span>
      <button className="submitBtn" onClick={() => {
              this.props.updateLocation(this.state.userInputLocation);
              this.props.toggleWelcome();
        }}>Submit</button>
      </section>
    );
  }
}

