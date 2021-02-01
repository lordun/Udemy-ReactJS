import React, {Component} from 'react';
// import Game from './Game';
import Button from './Button';
import BrokenClick from './BrokenClick';
import FixBrokenClick from './FixBrokenClick';
import FixBrokenClickAlternative from './FixBrokenClickAlternative';
import './App.css';

class App extends Component {
  render () {
    return <div className="App">
      <Button />
      <BrokenClick />
      <FixBrokenClick />
      <FixBrokenClickAlternative />
    </div>;
  }
} 

export default App;
