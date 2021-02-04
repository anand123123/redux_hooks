import React from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';

import {incrementCounter} from './store/actions'

function App() {
  const count = useSelector(state => state.counter, shallowEqual)
  const dispatch = useDispatch();
  console.log('render')
  return (
    <div className="App">
      count : {count}
      <button onClick={ () => { dispatch(incrementCounter(2343)); } }> Increment</button>
    </div>
  );
}

export default App;
