import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';
import { submitGuess, newGame } from './actions';

import store from './store';
import Game from './components/game';

store.subscribe((x) => {
  console.log(`I'm subscribed: ${x}`);
});
console.log(store.getState());
console.log(store.dispatch(submitGuess('33')));
console.log(store.getState());
console.log(store.dispatch(submitGuess('87')));
console.log(store.getState());
console.log(store.dispatch(newGame()));
console.log(store.getState());

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
