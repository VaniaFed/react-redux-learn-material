import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

import store from './store';

const render = () => {
  ReactDom.render(
    <App store={store} />,
    document.querySelector('#react-app')
  )
};

store.subscribe(render);
render();