import '../sass/index.sass';
import React, { PropTypes } from 'react';

const Star = ({selected = false, onClick=f=>f}) => {
  return (
    <div className={selected ? 'star selected' : 'star'}
      onClick={onClick}>
    </div>
  )
}

Star.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Star;
