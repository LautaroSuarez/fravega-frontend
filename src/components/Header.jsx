import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0064e0;
  padding: 10px 20px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const LogoutButton = styled.button`
  background-color: #ff3b3f;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  &:hover {
    opacity: 0.8;
  }
`;

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">Fravega</Logo>
        <NavLinks>
          <StyledLink to="/products">Productos</StyledLink>
          <StyledLink to="/cart">Carrito</StyledLink>
          <StyledLink to="/profile">Mi Perfil</StyledLink>
          <StyledLink to="/register">Registrarse</StyledLink>
          <StyledLink to="/login">Iniciar Sesión</StyledLink>
          <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
