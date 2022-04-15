import React from 'react';
import {
  Container, Header, LogoImg, MenuContainer, MenuItemLink, Title
} from './styles';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import logoImg from "../../assets/logo.svg";

const Aside = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logoImg} alt="My Wallet Logo" />
        <Title>My Wallet</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/dashboard">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>
        <MenuItemLink href="/dashboard">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>
        <MenuItemLink href="/dashboard">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
