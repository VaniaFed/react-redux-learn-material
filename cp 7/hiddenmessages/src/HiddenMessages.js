import React, { Component } from 'react';
import { render } from 'react-dom';

class HiddenMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
        hidden: (props.hide) ? props.hide : true
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ hidden: nextProps.hide })
  }

  render() {
    const { children } = this.props
    const { hidden } = this.state
    return (
      <p>
        {(hidden) ?
          children.replace(/[a-zA-Z0-9]/g, "x") :
          children
        }
      </p>
    )
  }
}

class HiddenMessages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [
        "The crow crows after midnight",
        "Bring a watch and dark clothes to the spot",
        "Jericho Jericho Go"
      ],
      showing: -1
    }
  }

  componentWillMount() {
    this.interval = setInterval(() => {
      let { showing, messages } = this.state;
      showing = (++showing >= messages.length) ?
        -1 :
        showing;
      this.setState({showing});
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { messages, showing } = this.state
    return (
      <div className="hidden-messages">
        {messages.map((message, i) =>
          <HiddenMessage key={i}
            hide={(i!==showing)}>
            {message}
          </HiddenMessage>
        )}
      </div>
    )
  }
}

render(<HiddenMessages />, document.querySelector('#root'));