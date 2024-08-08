// Profile.js
import React, { useEffect, useState } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({});
  const [pets, setPets] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/';
        return;
      }

      try {
        const response = await fetch('/api/auth/profile', {
          method: 'GET',
          headers: {
            'Authorization': token
          }
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data);
          const petsResponse = await fetch(`/api/pets/user/${data.id}`, {
            method: 'GET',
            headers: {
              'Authorization': token
            }
          });
          const petsData = await petsResponse.json();
          setPets(petsData);
        } else {
          setMessage(data.message);
        }
      } catch (err) {
        setMessage('服务器错误');
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Profile</h1>
      <p id="username">用户名: {user.username}</p>
      <p id="email">郵箱: {user.email}</p>
      <p id="phone">電話: {user.phone}</p>
      <button onClick={handleLogout}>登出</button>
      <h2>更改資料</h2>
      <form id="change-profile-form">
        <input type="text" placeholder="用户名" required />
        <input type="email" placeholder="郵箱" required />
        <input type="tel" placeholder="電話" required />
        <button type="submit">更改資料</button>
      </form>
      <h2>更改密碼</h2>
      <form id="change-password-form">
        <input type="password" placeholder="當前密碼" required />
        <input type="password" placeholder="新密碼" required />
        <input type="password" placeholder="確認新密碼" required />
        <button type="submit">更改密碼</button>
      </form>
      <h2>管理寵物</h2>
      <form id="add-pet-form">
        <input type="text" id="pet-breed" placeholder="品種" required />
        <input type="text" id="pet-size" placeholder="大小" />
        <input type="date" id="pet-birthdate" placeholder="出生日期" />
        <input type="number" step="0.01" id="pet-weight" placeholder="體重 (kg)" />
        <input type="number" step="0.01" id="pet-length" placeholder="長度 (cm)" />
        <button type="submit">添加寵物</button>
        <p id="add-pet-message"></p>
      </form>
      <h2>你的寵物</h2>
      <ul id="pets-list">
        {pets.map(pet => (
          <li key={pet.id}>
            品种: {pet.breed}, 大小: {pet.size || 'N/A'}, 出生日期: {pet.birthdate || 'N/A'}, 
            體重: {pet.weight || 'N/A'} kg, 長度: {pet.length || 'N/A'} cm
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
