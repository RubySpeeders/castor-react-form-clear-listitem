import React, { Component } from 'react';

class CreatureForm extends Component {
  state = {
    form: {
      name: '',
      origin: '',
    },
  };

  handleChangeField = (event, fieldKey) => {
    this.setState({
      // enteredCreature: event.target.value,
      form: {
        ...this.state.form,
        [fieldKey]: event.target.value,
      },
    });
  };

  handleClickAdd = (event) => {
    console.log('handleClickAdd');
    this.props.creatureCallback(this.state.form); // { name: 'abc', origin; 'xyz' }
    this.setState({
      form: {
        name: '',
        origin: '',
      },
    });
  };

  render() {
    return (
      <div className="component-container">
        <input
          type="text"
          placeholder="Creature Name"
          name="creature"
          onChange={(event) => this.handleChangeField(event, 'name')}
          value={this.state.form.name}
        />
        <input
          type="text"
          placeholder="Creature Origin"
          name="origin"
          onChange={(event) => this.handleChangeField(event, 'origin')}
          value={this.state.form.origin}
        />
        <button onClick={this.handleClickAdd}>Add</button>
      </div>
    );
  }
}

export default CreatureForm;
