import React from 'react';
import '../css/CheckboxGroup.css';

const options = [
  { id: '1', title: '訂單通知', description: '接收有關您的訂單狀態更新（如訂單確認、發貨通知等）' },
  { id: '2', title: '促銷通知', description: '接收最新的促銷活動和特價商品通知' },
  { id: '3', title: '新聞通知', description: '接收最新的新聞和更新資訊' },
  
];

const CheckboxGroup = () => (
  <>
    {options.map(option => (
      <div className="checkOption" key={option.id}>
        <p>{option.title}</p>
        <div>
          <input type="checkbox" className="checkbox1 checkboxWrapper" name={`stateUpdate${option.id}`} id={`checkbox${option.id}`} />
          <label htmlFor={`checkbox${option.id}`} className="customCheckboxLabel">
            {option.description}
          </label>
        </div>
      </div>
    ))}
  </>
);

export default CheckboxGroup;
