import React, { PropTypes } from 'react';
import '../sass/AddColorForm.scss';

const AddColorForm = ({onNewColor = ()=>{}}) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
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
