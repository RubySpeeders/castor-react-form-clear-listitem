import React from 'react';
import './App.css';
import Header from '../Header/Header';

class App extends React.Component {
  state = {
    // enteredCreature: '',
    // enteredOrigin: '',
    form: {
      name: '',
      origin: '',
    },
    creatures: [
      { name: 'Unicorn', origin: ' Europe' },
      { name: 'Sphinx', origin: 'Persia' },
      { name: 'Kappa', origin: 'Japan' },
      { name: 'Dryad', origin: 'Greece' },
      { name: 'Jackalope', origin: 'Kansas' },
    ],
  };

  handleClickAdd = (event) => {
    this.setState({
      creatures: [
        ...this.state.creatures,
        {
          ...this.state.form,
        },
      ],
    });
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
      <div>
        <Header />
        <main className="container">
          <p>Welcome to Lists in react</p>
          {/* CODE COMMENT */}
          <div>
            <input
              type="text"
              placeholder="Creature Name"
              name="creature"
              onChange={(event) => this.handleChangeField(event, 'name')}
            />
            <input
              type="text"
              placeholder="Creature Origin"
              name="origin"
              onChange={(event) => this.handleChangeField(event, 'origin')}
            />
            <button onClick={this.handleClickAdd}>Add</button>
          </div>
          <ul>{listElements}</ul>
        </main>
      </div>
    );
  }
}

export default App;
