import React, { Component } from 'react';
import CreatureForm from '../CreatureForm/CreatureForm';

class CreatureList extends Component {
  render() {
    // map method
    const listElements = this.props.creatures.map(function (item, index) {
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
