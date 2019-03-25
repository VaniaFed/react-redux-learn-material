import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import { removeColor, rateColor } from './actions';
import '../sass/ColorList.scss';

const ColorList = ({ store={} }) => {
  const state = store.getState();
  return (
    <div className="color-list">
      {(state.colors.length) === 0 ?
      <h1>No colors Listed. (Add a color)</h1> :
      state.colors.map(color => 
        <Color key={color.id}
               {...color}
               onRate={(rating) => {
                 store.dispatch(
                   rateColor(color.id, rating)
                 );
               }} 
               onRemove={() => {
                 store.dispatch(
                   removeColor(color.id)
                 );
               }}
        />
      )
    } 
    </div>
  )
};

Color.propTypes = {
  store: PropTypes.object,
}

export default ColorList;