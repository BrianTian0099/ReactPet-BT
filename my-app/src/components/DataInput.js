import React, { useState, useEffect } from 'react';
import FormGroup from './FormGroup';
import '../css/DataInput.css';

const initialData = {
  name: 'Fluffy',
  species: '柯基犬',
  size: '小型犬',
  birth: '2023.11.08',
  weight: '7.2Kg',
  length: '42.8Cm'
};

const emptyData = {
  name: '無資料',
  species: '無資料',
  size: '無資料',
  birth: '無資料',
  weight: '無資料',
  length: '無資料'
};

const DataInput = ({ cardId }) => {
  const [formData, setFormData] = useState(cardId === 1 ? initialData : emptyData);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(`petData${cardId}`));
    if (storedData) {
      setFormData(storedData);
    } else {
      setFormData(cardId === 1 ? initialData : emptyData);
    }
  }, [cardId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    localStorage.setItem(`petData${cardId}`, JSON.stringify(formData));
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };
  

  return (
    <div className="dataInput">
      <FormGroup
        label="名字"
        type="text"
        id="name"
        value={formData.name}
        onChange={handleChange}
        readOnly={!isEditing}
        className={!isEditing ? 'formText' : ''}
      />
      <FormGroup
        label="品種"
        type="text"
        id="species"
        value={formData.species}
        onChange={handleChange}
        readOnly={!isEditing}
        className={!isEditing ? 'formText' : ''}
      />
      <FormGroup
        label="大小"
        type="text"
        id="size"
        value={formData.size}
        onChange={handleChange}
        readOnly={!isEditing}
        className={!isEditing ? 'formText' : ''}
      />
      <FormGroup
        label="生日"
        type="text"
        id="birth"
        value={formData.birth}
        onChange={handleChange}
        readOnly={!isEditing}
        className={!isEditing ? 'formText' : ''}
      />
      <FormGroup
        label="公斤"
        type="text"
        id="weight"
        value={formData.weight}
        onChange={handleChange}
        readOnly={!isEditing}
        className={!isEditing ? 'formText' : ''}
      />
      <FormGroup
        label="身長"
        type="text"
        id="length"
        value={formData.length}
        onChange={handleChange}
        readOnly={!isEditing}
        className={!isEditing ? 'formText' : ''}
      />
      <div className='dataInputBtn'>
        {isEditing ? (
          <button id='dataInputBtn1' onClick={handleSaveClick}>保存</button>
        ) : (
          <button id='dataInputBtn2' onClick={handleEditClick}>編輯</button>
        )}
      </div>
    </div>
  );
};

export default DataInput;
