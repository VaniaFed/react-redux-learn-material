import React, { Component, PropTypes } from 'react';
import StarRating from './StarRating';
import '../sass/Color.scss';

const Color = ({title, color, rating = 0, onRate=f=>f, onRemove=f=>f}) => {
  return (
    <section className="color">
      <h1>{title}</h1> 
      <button onClick={onRemove}>X</button>
      <div className="color"
          style={{backgroundColor: color}}>
      </div>
      <div>
        <StarRating starsSelected={rating} onRate={onRate} />
      </div>
    </section>
  )
}

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
}

export default Color;