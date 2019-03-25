import C from './constants';
import { v4 } from 'uuid';

export const addColor = (color) => {
  return {
    type: C.ADD_COLOR,
    id: v4(),
    ...color,
    rating: 0,
  }
}

export const removeColor = (id) => {
  return {
    type: C.REMOVE_COLOR,
    id,
  }
}

export const rateColor = (id, rating) => {
  return {
    type: C.RATE_COLOR,
    id,
    rating
  }
}