import React, { useState } from 'react';
import DataInput from './DataInput';
// import FormGroup from './FormGroup';
import '../css/Card.css';

const Card = ({ id, image, name }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleCard = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`petCard ${expanded ? 'expanded' : ''}`} id={id} onClick={() => !expanded && toggleCard()}>
      <div className="cardContent">
        {image ? (
          <>
            <img className='dataHaveImg' src={image} alt={name} />
            <p>{name}</p>
          </>
        ) : (
          <>
            <img id='imgPlus' className='imgPlus' src={`${process.env.PUBLIC_URL}/assets/卡片加號.svg`} alt="" />
            <p>點擊查看更多信息</p>
          </>
        )}
      </div>
      <div className="expandedContent">
        <button className="backButton" onClick={toggleCard}>返回</button>
        <div className="setSideContent">
          <div className="petPic">
            {image && <img id='biggerImg' src={image} alt={name} />}
           
            {/* <img id='biggerImg' src="./svg/pexels-hnoody93-58997.jpg"   alt={name} />; */}


            {/* {image && <img id='biggerImg' src={image}   alt={name} />} */}

          </div>
          <div className="dataGroup">
            <DataInput />
            {/* <FormGroup label="資料紀錄" type="select" id={`records${id}`} options={[{ value: 'vaccination', text: '疫苗接種' }, { value: 'bloodTest', text: '抽血紀錄' }, { value: 'all', text: '顯示全部' }]} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;














//--------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import DataInput from './DataInput';
// // import FormGroup from './FormGroup';
// import '../css/Card.css';

// const Card = ({ id }) => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleCard = () => {
//     setExpanded(!expanded);
//   };

//   return (



    // -------------------------------------------------------------------------------------------------------------
//     <div className={`petCard ${expanded ? 'expanded' : ''}`} id={id} onClick={() => !expanded && toggleCard()}>
//       <div className="cardContent">
//       <img src={`${process.env.PUBLIC_URL}/assets/卡片加號.svg`} alt="" />
//         <p>點擊查看更多信息</p>
//       </div>
//       <div className="expandedContent">
//         <button className="backButton" onClick={toggleCard}>返回</button>
//         <div className="setSideContent">
//           <div className="petPic"></div>
//           <div className="dataGroup">
//             <DataInput />
//             {/* <FormGroup label="資料紀錄" type="select" id={`records${id}`} options={[{ value: 'vaccination', text: '疫苗接種' }, { value: 'bloodTest', text: '抽血紀錄' }, { value: 'all', text: '顯示全部' }]} /> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;
