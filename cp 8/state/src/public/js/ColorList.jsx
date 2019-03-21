import React from 'react';
import PropTypes from 'prop-types';
import Color from './Color';
import '../sass/ColorList.scss';

const ColorList = ({colors = [], onRate=f=>f, onRemove=f=>f}) => {
  return (
    <div className="color-list">
      {(colors.length) === 0 ?
      <h1>No colors Listed. (Add a color)</h1> :
      colors.map(color => 
        <Color key={color.id}
               {...color}
               onRate={(rating) => onRate(color.id, rating)}
               onRemove={() => onRemove(color.id)} />
      )
    } 
    </div>
  )
};

Color.propTypes = {
  colors: PropTypes.array,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
}

export default ColorList;