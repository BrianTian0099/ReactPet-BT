import React from 'react';
import FormGroup from './FormGroup';
import '../css/DataInput.css';

const DataInput = () => (
  <div className="dataInput">
    <FormGroup label="名字" type="text" id="species" />
    <FormGroup label="品種" type="text" id="species" />
    <FormGroup label="大小" type="text" id="size" />
    <FormGroup label="生日" type="text" id="birth" />
    <FormGroup label="公斤" type="text" id="weight" />
    <FormGroup label="身長" type="text" id="length" />
    <div className='dataInputBtn'>
      {/* <div className='btnBackground'> */}
    <button id='dataInputBtn1'>重新載入</button>
    <button id='dataInputBtn2'>修改</button>
    {/* </div> */}
    </div>
  </div>
);

export default DataInput;
