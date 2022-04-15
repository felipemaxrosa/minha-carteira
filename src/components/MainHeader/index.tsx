import { useMemo } from 'react';
import {
  Container, Profile, Welcome, UserName
} from './styles';
import emojis from '../../utils/emojis';

const MainHeader = () => {
  const emoji = useMemo(() => {
    const index = Math.floor(Math.random() * emojis.length);
    return emojis[index];
  }, []);

  return (
    <Container>
      <h1>Toogle</h1>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>
        <UserName>Felipe Rosa</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
