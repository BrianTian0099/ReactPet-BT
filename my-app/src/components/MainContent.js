import React, { useState, useEffect } from 'react';
import Section from './Section';
import Card from './Card';
import OrderCard from './OrderCard';
import CheckboxGroup from './CheckboxGroup';
import CardRight from './CardRight';
import FormGroup from './FormGroup';
import ProductCard from './ProductCard';
import '../css/MainContent.css';
import WelcomeCard from './welcomeCard';
import TiltComponent from './TiltComponent';
import PasswordCard from './PasswordCard';

const MainContent = ({ activeSection, sectionTitle }) => {
  const [showPasswordCard, setShowPasswordCard] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState('吳康人');
  const [email, setEmail] = useState('woo552@gmail.com');
  const [phone, setPhone] = useState('0932856589');

  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');
    if (storedName) setName(storedName);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhone) setPhone(storedPhone);
  }, []);

  const handlePasswordButtonClick = () => {
    setShowPasswordCard(true);
  };

  const handleClosePasswordCard = () => {
    setShowPasswordCard(false);
  };

  const handleEditButtonClick = () => {
    setEditMode(true);
  };

  const handleSaveButtonClick = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    setEditMode(false);
  };

  const products = [
    { image: "https://i.postimg.cc/zfSgdJnz/O-KAT.jpg", title: "《美喵人生 O'KAT》冷凍乾燥生肉糧 | 鮪魚+雞｜貓冷凍脫水乾糧", price: '$10' },
    { image: "https://i.postimg.cc/1XWTDhWM/O-KAT.jpg", title: "《美喵人生 O'KAT》冷凍乾燥生肉糧 | 美味雞｜貓冷凍脫水乾糧", price: '$20' },
    { image: "https://i.postimg.cc/X7BFTN6L/Wild-Feeding-300g.jpg", title: '《野起來吃 Wild Feeding》生食(土雞),犬貓冷凍生食300g,鹿野土雞,冷凍配送', price: '$30' },
    { image: "https://i.postimg.cc/J0kndnHB/Wild-Feeding-300g.jpg", title: '《野起來吃 Wild Feeding》生食(鮭),犬貓冷凍生食300g,阿拉斯加野生鮭,冷凍配送', price: '$40' },
    { image: "https://i.postimg.cc/3R6NBpNT/Wild-Feeding-300g.jpg", title: '《野起來吃 Wild Feeding》生食(羊),犬貓冷凍生食300g,澳洲草飼羊,冷凍配送', price: '$50' },
    { image: "https://i.postimg.cc/2511gmJm/wanwan-80g-4.jpg", title: "《wanwan》注文時刻犬用營養餐包80g,鮮雞4蔬,狗副食罐", price: '$60' },
    { image: "https://i.postimg.cc/tT5G5n5g/Nutressense-30.jpg", title: '《寵立善 Nutressense》犬貓抗氧護眼葉黃素25包｜寵物OPC', price: '$70' },
    { image: "https://i.postimg.cc/tgng2kZ4/GO-VITA-55.jpg", title: '《樂維他 GO VITA》免疫健康55顆', price: '$80' },
    { image: "https://i.postimg.cc/1tcsjj9s/RAW-SUPPORT-128g.jpg", title: '《牧野飛行 RAW SUPPORT》離胺酸蔓越莓128g', price: '$90' },
  ];

  const profileImages = [
    `${process.env.PUBLIC_URL}/assets/pexels-hnoody93-58997.jpg`,
    `${process.env.PUBLIC_URL}/assets/pexels-japheth-569170.jpg`,
    `${process.env.PUBLIC_URL}/assets/pexels-lauren-whitaker-1014624-1975989.jpg`,
    `${process.env.PUBLIC_URL}/assets/pexels-valeriya-1805164.jpg`,
    `${process.env.PUBLIC_URL}/assets/自訂添加背景圖_工作區域 1.png`,
  ];

  const options = {
    scale: 1,
    speed: 500,
    max: 2,
  };

  return (
    <div className="mainContent">
      <div className="topBar" id="topBar">
        <h1>{sectionTitle}</h1>
      </div>
      <div className="content">
        <Section id="section1" active={activeSection === 'section1'}>
          <TiltComponent options={options}>
            <WelcomeCard />
          </TiltComponent>
        </Section>
        <Section id="section2" active={activeSection === 'section2'}>
          <div className="card">
            <CardRight>
              <FormGroup
                label="姓名"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                readOnly={!editMode}
                className={editMode ? '' : 'formText'}
              />
              <FormGroup
                label="電子郵件"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                readOnly={!editMode}
                className={editMode ? '' : 'formText'}
              />
              <FormGroup
                label="手機號碼"
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                readOnly={!editMode}
                className={editMode ? '' : 'formText'}
              />
              <div>
                <p>個人檔案自定義背景圖片</p>
                <div className='imageGrid'>
                  {profileImages.map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Profile ${index + 1}`} className="profileThumbnail" />
                  ))}
                </div>
              </div>
              <div className="mainButtonGrid">
                <button className='styleBtn Mainbtn1' type="button" onClick={handlePasswordButtonClick}>更改密碼</button>
                {editMode ? (
                  <button className='styleBtn Mainbtn2' type="button" onClick={handleSaveButtonClick}>保存</button>
                ) : (
                  <button className='styleBtn Mainbtn2' type="button" onClick={handleEditButtonClick}>編輯</button>
                )}
              </div>
            </CardRight>
          </div>
        </Section>
        <Section id="section3" active={activeSection === 'section3'}>
          <div className="flexContent">
            <Card id="petCard1" cardId={1} image={`${process.env.PUBLIC_URL}/assets/pexels-hnoody_cut.jpg`} name="Fluffy" />
            <Card id="petCard2" cardId={2} />
            <Card id="petCard3" cardId={3} />
          </div>
        </Section>
        <Section id="section4" active={activeSection === 'section4'}>
          <OrderCard id="medicalOrder" type="醫療訂單" name="喵喵" service="看診" clinic="寵物醫院" doctor="張醫師" imgSrc={`${process.env.PUBLIC_URL}/assets/hospital-regular.svg`} />
          <OrderCard id="groomingOrder" type="美容訂單" name="汪汪" service="洗澡" clinic="寵物美容院" doctor="李美容師" imgSrc={`${process.env.PUBLIC_URL}/assets/scissors-solid.svg`} />
          <OrderCard id="shoppingOrder" type="商城訂單" product="高級貓糧" spec="美味雞" quantity="1" orderPrice="500" imgSrc={`${process.env.PUBLIC_URL}/assets/tag-solid.svg`} />
        </Section>
        <Section id="section5" active={activeSection === 'section5'}>
          <CheckboxGroup />
        </Section>
        <Section id="section6" active={activeSection === 'section6'}>
          <div className="productGrid">
            <div className='aNoneOb'></div>
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </Section>
      </div>
      {showPasswordCard && (
        <div className="modal">
          <PasswordCard 
            button={<button type="submit">提交</button>}
            onClose={handleClosePasswordCard}
            isOpen={showPasswordCard} 
          />
        </div>
      )}
    </div>
  );
};

export default MainContent;
