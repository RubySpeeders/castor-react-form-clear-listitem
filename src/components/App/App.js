import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import CreatureForm from '../CreatureForm/CreatureForm';
import CreatureList from '../CreatureList/CreatureList';

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
    return (
      <div>
        <Header />
        <main className="container">
          <Welcome />
          {/* CODE COMMENT */}
          <CreatureForm />
          <CreatureList />
        </main>
      </div>
    );
  }
}

export default App;
