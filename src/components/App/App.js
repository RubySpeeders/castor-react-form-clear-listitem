import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import CreatureForm from '../CreatureForm/CreatureForm';

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

  // handleClickAdd = (event) => {
  //   this.setState({
  //     creatures: [
  //       ...this.state.creatures,
  //       {
  //         ...this.state.form,
  //       },
  //     ],
  //   });
  // };

  // handleChangeField = (event, fieldKey) => {
  //   this.setState({
  //     // enteredCreature: event.target.value,
  //     form: {
  //       ...this.state.form,
  //       [fieldKey]: event.target.value,
  //     },
  //   });
  // };

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
          <Welcome />
          {/* CODE COMMENT */}
          <CreatureForm />
          <ul>{listElements}</ul>
        </main>
      </div>
    );
  }
}

export default App;
