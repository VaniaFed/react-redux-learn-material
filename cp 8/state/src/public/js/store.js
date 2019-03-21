import { createStore, combineReducers } from 'redux'
import { colors, sort } from './reducers'

const initialState = {
  colors: [
    {
      id: 0,
      title: "Rad Red",
      color: "#FF0000",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
    },
    {
      id: 1,
      title: "Crazy Green",
      color: "#00FF00",
      rating: 0,
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    },
    {
      id: 2,
      title: "Big Blue",
      color: "#0000FF",
      rating: 5,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
  ],
  sort: "SORTED_BY_TITLE"
}

const store = createStore(
  combineReducers({ colors, sort }),
  initialState
)

const unsubscribe = store.subscribe(() => {console.log('state now: ', store.getState())})


store.dispatch({
  type: 'ADD_COLOR',
  id: 3,
  title: "Big Blue",
  color: "#0000FF",
  rating: 5,
})

unsubscribe()

store.dispatch({
  type: 'REMOVE_COLOR',
  id: 2,
})

export default store