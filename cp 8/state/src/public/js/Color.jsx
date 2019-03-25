import React, { Component } from 'react';
import StarRating from './StarRating';
import '../sass/Color.scss';
import PropTypes from 'prop-types';

class Color extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.rating !== nextProps.rating;
  }

  render () {
    const { title, color, rating, onRate, onRemove } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref="title" >{title}</h1> 
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
}

Color.propTypes = {
  store: PropTypes.object,
}

Color.defaultProps = {
  store: {},
}

export default Color; 