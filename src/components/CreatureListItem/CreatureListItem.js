import React, { Component } from 'react';

class CreatureListItem extends Component {
    render() {
        return (
            <li className="component-container">
                {this.props.item.name} is originating from {this.props.item.origin}
            </li>
        )
    }
}

export default CreatureListItem;