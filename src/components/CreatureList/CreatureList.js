import React, { Component } from 'react';
import CreatureListItem from '../CreatureListItem/CreatureListItem';

class CreatureList extends Component {
  render() {
    // map method
    // [1, 2, 3]
    // [a, b, c]

    // { name: string, origin: string }
    const listElements = this.props.creatures.map(function (item, index) {
      return (
        <CreatureListItem key={index} item={item}/>
      );
    });

    // listElements = [ <li>...</li>, <li>...</li>, <li>...</li>]

    return (
      <div className="component-container">
        <ul>{listElements}</ul>
      </div>
    );
  }
}

export default CreatureList;
