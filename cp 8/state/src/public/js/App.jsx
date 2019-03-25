import React, { Component } from 'react';

import AddColorForm from './AddColorForm';
import ColorList from './ColorList';
import '../sass/APP.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { store } = this.props;
    return (
      <div className="app">
        <AddColorForm store={store} />
        <ColorList store={store}/>
      </div>
    )
  }
}

