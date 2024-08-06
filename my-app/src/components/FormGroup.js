import React from 'react';
import '../css/FormGroup.css';

const FormGroup = ({ label, type, id, options }) => (
  <div className="formGroup">
    <label htmlFor={id}>{label}</label>
    {type === 'select' ? (
      <select id={id} name={id}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.text}</option>
        ))}
      </select>
    ) : (
      <input type={type} id={id} name={id} />
    )}
  </div>
);

export default FormGroup;


            //