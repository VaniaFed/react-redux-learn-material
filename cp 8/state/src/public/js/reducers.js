import C from './constants'

export const color =  (state={}, action) => {
  switch(action.type) {
    case C.ADD_COLOR:
      return {
        id: action.id,
        title: action.title,
        color: action.color,
        timestamp: action.timestamp,
        rating: 0,
      }
    case C.RATE_COLOR:
      return {
        ...state,
        rating: action.rating,
      }
    default:
      return state
  }
}

const actionAdd = {
  type: C.ADD_COLOR,
  id: '1',
  title: 'red',
  color: '#f00',
  timestamp: new Date(),
  rating: 0,
}

let newColor = color({}, actionAdd)
console.log(newColor)

const actionRate = {
  type: C.RATE_COLOR,
  rating: 5,
}
const ratedColor = color(newColor, actionRate)
console.log(ratedColor)

export const colors =  (state=[], action) => {
  return []
}

export const sort =  (state='SORTED_BY_DATE', action) => {
  return ''
}