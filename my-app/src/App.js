import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faKeyboard, faGraduationCap, faList } from '@fortawesome/free-solid-svg-icons';


import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Test
          </p>
            <FontAwesomeIcon icon={faHome} />
        </header>
      </div>
    );
  }
}

export default App;
