import React, { Component } from 'react';
import './App.css';

import FunComponent from '../../components/FunComponent/FunComponent'

class App extends Component {
  async componentWillMount() {
    const {
      changeHomeText
    } = this.props

    await changeHomeText();
  }

  render() {
    const {
      homeText,
      componentText1,
      componentText2
    } = this.props;

    return (
      <div className="App">
        <p>
          First Redux App: {homeText}
        </p>

        <FunComponent
          componentText={componentText1}
          componentText2={componentText2}
        />
      </div>
    );
  }
}

export default App;
