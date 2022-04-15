import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.text};
  padding-left: 24px;
  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.text};
  margin-left: 8px;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const MenuItemLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  margin: 8px 0;
  display: flex;
  align-items: center;

  transition: opacity 0.3s;

  > svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.7;
  }
`;
