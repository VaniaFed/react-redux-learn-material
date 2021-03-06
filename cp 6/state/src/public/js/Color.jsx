import React, { Component } from 'react';
import StarRating from './StarRating';
import '../sass/Color.scss';
import PropTypes from 'prop-types';

class Color extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  }

  shouldComponentUpdate(nextProps) {
    return this.props.rating !== nextProps.rating;
  }

  componentWillUpdate(nextProps) {
  }

  componentDidUpdate(prevProps) {

    const { title, rating } = this.props;
    const status = (rating > prevProps.rating) ? 'better' : 'worse';
    this.refs.title.style.backgroundColor = '';
    this.refs.title.style.color = 'black';
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
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
}

Color.defaultProps = {
  title: undefined,
  rating: 0,
  color: '#000',
  onRate: f=>f,
  onRemove: f=>f,
}

export default Color; 