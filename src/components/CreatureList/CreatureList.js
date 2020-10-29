import React, { Component } from 'react';
import CreatureForm from '../CreatureForm/CreatureForm';

class CreatureList extends Component {
  state = {
    creatures: [
      { name: 'Unicorn', origin: ' Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Jackalope', origin: 'Kansas' },
    ],
  };

  render() {
    // map method
    const listElements = this.state.creatures.map(function (item, index) {
      return (
        <li key={index}>
          {item.name} is originating from {item.origin}
        </li>
      );
    });

    return (
      <div className="component-container">
        <ul>{listElements}</ul>
      </div>
    );
  }
}

export default CreatureList;
