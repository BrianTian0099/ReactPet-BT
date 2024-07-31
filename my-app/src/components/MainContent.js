import React from 'react';
import Section from './Section';
import Card from './Card';
import OrderCard from './OrderCard';
import CheckboxGroup from './CheckboxGroup';
import CardRight from './CardRight';
import FormGroup from './FormGroup';
import '../css/MainContent.css';

const MainContent = ({ activeSection }) => (
  <div className="mainContent">
    <div className="topBar" id="topBar">
      <h1>歡迎你的加入</h1>
    </div>
    <div className="content">
      <Section id="section1" active={activeSection === 'section1'}>
        <p>這是謝小小的部分。</p>
      </Section>
      <Section id="section2" active={activeSection === 'section2'}>
        <div className="card">
          <CardRight>
            <FormGroup label="姓名" type="text" id="name" />
            <FormGroup label="電子郵件" type="email" id="email" />
            <FormGroup label="手機號碼" type="tel" id="phone" />
            <button type="button">更改密碼</button>
          </CardRight>
        </div>
      </Section>
      <Section id="section3" active={activeSection === 'section3'}>
        <div className="flexContent">
          <Card id="petCard1" />
          <Card id="petCard2" />
          <Card id="petCard3" />
        </div>
      </Section>
      <Section id="section4" active={activeSection === 'section4'}>
        <OrderCard id="medicalOrder" type="醫療訂單" name="喵喵" service="看診" clinic="寵物醫院" doctor="張醫師" imgSrc="medical-order.jpg" />
        <OrderCard id="groomingOrder" type="美容訂單" name="汪汪" service="洗澡" clinic="寵物美容院" doctor="李美容師" imgSrc="grooming-order.jpg" />
        <OrderCard id="shoppingOrder" type="商城訂單" item="狗糧" date="2024-07-28" orderId="123456" imgSrc="shopping-order.jpg" />
      </Section>
      <Section id="section5" active={activeSection === 'section5'}>
        <CheckboxGroup />
      </Section>
    </div>
  </div>
);

export default MainContent;
