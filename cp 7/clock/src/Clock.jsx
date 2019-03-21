import React, { Component } from 'react';
import { getClockTime } from './lib';
import { render, unmountComponentAtNode } from 'react-dom';
const target = document.querySelector('#root');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = getClockTime();
  }

  componentDidMount() {
    console.log('Starting Clock');
    this.ticking = setInterval(() => {
      this.setState(getClockTime())
      console.log(this.state);
    }
    , 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticking);
    console.log('Stopping Clock');
  }

  render() {
    const { hours, minutes, seconds, timeOfDay } = this.state;
    return (
      <div className="clock">
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
        <span>{timeOfDay}</span>
        <button onClick={this.props.onClose}>x</button>
      </div>
    )
  }
}

render(<Clock onClose={() => unmountComponentAtNode(target)} />, target);
export default Clock;