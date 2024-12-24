import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #0049b7;
  color: #fff;
  padding: 20px 20px;
  margin-top: 40px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const FooterColumn = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const FooterTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 1.1rem;
  color: #ffdd00;
`;

const FooterLink = styled.a`
  color: #fff;
  display: block;
  margin-bottom: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterText = styled.p`
  margin-bottom: 5px;
  color: #fff;
`;

const Copyright = styled.div`
  margin-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;

  @media (min-width: 768px) {
    margin-top: 0;
    text-align: right;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        {/* Primera columna */}
        <FooterColumn>
          <FooterTitle>Fravega S.A.</FooterTitle>
          <FooterText>Dirección Falsa 123</FooterText>
          <FooterText>Ciudad Imaginaria, País</FooterText>
          <FooterText>Tel: (011) 5555-1234</FooterText>
        </FooterColumn>

        {/* Segunda columna */}
        <FooterColumn>
          <FooterTitle>Enlaces Útiles</FooterTitle>
          <FooterLink href="#">Términos y Condiciones</FooterLink>
          <FooterLink href="#">Política de Privacidad</FooterLink>
          <FooterLink href="#">Preguntas Frecuentes</FooterLink>
          <FooterLink href="#">Trabajá con Nosotros</FooterLink>
        </FooterColumn>

        {/* Tercera columna */}
        <FooterColumn>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText>Email: contacto@fravega-chilling.com</FooterText>
          <FooterText>Horario: Lunes a Viernes 9-18hs</FooterText>
        </FooterColumn>

        {/* Copyright */}
        <Copyright>
          © 2024 Fravega chilling. Todos los derechos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
