import React from 'react';
import { render } from 'react-dom';

import App from './App';


import Reducers from './reducers';
import store from './store';

render(
  <App />,
  document.querySelector('#react-app')
)