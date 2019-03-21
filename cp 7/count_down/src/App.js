import React from 'react'
import ReactDOM from 'react-dom'
import { Dispatcher } from 'flux'
import { EventEmitter } from 'events'
import CountDown from './CountDown/CountDown'

const countdownActions = dispatcher => {
  return (
    {
      tick(currentCount) {
        dispatcher.handleAction({type: 'TICK'})
      },
      reset(count) {
        dispatcher.handleAction({
          type: 'RESET',
          count
        })
      }
    }
  )
}

class CountdownDispatcher extends Dispatcher {
  handleAction(action) {
    console.log(`dispatching action: action`, action)
    this.dispatch({
      source: 'VIEW_ACTION',
      action,
    })
  }
}

class CountdownStore extends EventEmitter {
  constructor(count=5, dispatcher) {
    super()
    this._count = count
    this.dispatchIndex = dispatcher.register(
      this.dispatch.bind(this)
    )
  }

  get count() {
    return this._count
  }

  dispatch(payload) {
    const { type, count } = payload.action
    switch(type) {
      case 'TICK': {
        this._count = this._count - 1
        this.emit('TICK', this._count)
        console.log(this.count)
        return true
      }
      case 'RESET': {
        this._count = count
        this.emit('RESET', this._count)
        return true
      }
      default: break
    }
  }
}

const appDispatcher = new CountdownDispatcher()
const actions = countdownActions(appDispatcher)
const store = new CountdownStore(60, appDispatcher)

const render = count => ReactDOM.render(
  <CountDown count={count} {...actions} />,
  document.getElementById('root')
)


store.on('TICK', () => render(store.count))
store.on('RESET', () => render(store.count))

render(store.count);