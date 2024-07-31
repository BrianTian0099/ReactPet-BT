import React from 'react';
import '../css/CheckboxGroup.css';

const CheckboxGroup = () => (
  <>
    {['1', '2', '3'].map(id => (
      <div className="checkOption" key={id}>
        <p>訂單通知</p>
        <div>
          <input type="checkbox" className="checkbox1 checkboxWrapper" name={`stateUpdate${id}`} id={`checkbox${id}`} />
          <label htmlFor={`checkbox${id}`} className="customCheckboxLabel">
            接收有關您的訂單狀態更新（如訂單確認、發貨通知等）
          </label>
        </div>
      </div>
    ))}
  </>
);

export default CheckboxGroup;
