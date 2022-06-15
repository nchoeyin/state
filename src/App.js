import React, {Component} from 'react';
import Game from './game'; //without the index.js, the react app doesnot work and the letter should be correctly typed since react is highly case sensitive
class App extends Component {
  render() {
    return (
             <div className="App">
               <Game />
             </div>
          );
      }
}
export default App;
