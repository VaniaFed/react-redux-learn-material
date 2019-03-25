import React from 'react';
import PropTypes from 'prop-types';
import '../sass/AddColorForm.scss';
import { addColor } from './actions';

const AddColorForm = ({ store }) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    const color = {
      title: _title.value,
      color: _color.value,
    }
    store.dispatch( addColor(color) )
    _title.value = '';
    _color.value = '';
    _title.focus();
  }

  return (
    <form className="add-color" onSubmit={submit}>
      <h1>Enter data</h1>
      <input ref={input => _title = input} type="text" placeholder="Color title..." required/>
      <input ref={input => _color = input} type="color"/>
      <button>ADD</button>
    </form>
  )
}

AddColorForm.propTypes = {
  onNewColor: PropTypes.func,
}

export default AddColorForm;
