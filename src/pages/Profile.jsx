import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 0 20px;
`;

function Profile() {
  const [profileData, setProfileData] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMsg('No tienes token. Inicia sesión para ver tu perfil.');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(res.data);
      } catch (error) {
        setErrorMsg(error.response?.data?.message || 'Error al obtener el perfil');
      }
    };

    fetchProfile();
  }, []);

  if (errorMsg) {
    return (
      <ProfileContainer>
        <p style={{ color: 'red' }}>{errorMsg}</p>
      </ProfileContainer>
    );
  }

  if (!profileData) {
    return (
      <ProfileContainer>
        <p>Cargando perfil...</p>
      </ProfileContainer>
    );
  }

  return (
    <ProfileContainer>
      <h2>Perfil de Usuario</h2>
      <p><strong>ID:</strong> {profileData.id}</p>
      <p><strong>Email:</strong> {profileData.email}</p>
      <p><strong>Mensaje:</strong> {profileData.message}</p>
    </ProfileContainer>
  );
}

export default Profile;
