import React from 'react';
import '../css/FormGroup.css';

const FormGroup = ({ label, type, id, value, onChange, readOnly, className }) => (
  <div className="formGroup">
    <label htmlFor={id}>{label}</label>
    <input 
      type={type} 
      id={id} 
      value={value} 
      onChange={onChange} 
      readOnly={readOnly} 
      className={className} 
    />
  </div>
);

export default FormGroup;
