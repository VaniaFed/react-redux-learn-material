import '../sass/index.sass';
import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import StarRating from './StarRating';

// class AddColorForm extends Component {
//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//   }

//   submit(e) {
//     const { _title, _color } = this.refs;
//     e.preventDefault();
//     this.props.onNewColor(_title.value, _color.value);
//     _title.value = '';
//     _color.value = '';
//     _title.focus();
//   }

//   render() {
//     return (
//       <form onSubmit={this.submit}>
//         <h1>Enter data</h1>
//         <input ref="_title" type="text" placeholder="Color title..."/>
//         <input ref="_color" type="color"/> 
//         <button>add</button>
//       </form>
//     )
//   }
// }


const AddColorForm = ({onNewColor = f=>f}) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = '';
    _color.value = '';
    _title.focus();
  }

  return (
    <form onSubmit={submit}>
      <h1>Enter data</h1>
      <input ref={input => _title = input} type="text" placeholder="Color title..."/>
      <input ref={input => _color = input} type="color"/> 
      <button>add</button>
    </form>
  )
}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
}

render(
  <div>
    <StarRating totalStars={5}/>
    <AddColorForm />
  </div>,
  document.querySelector('#react-app')
)