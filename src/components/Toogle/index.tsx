import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toogle = () => {
  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={false}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => console.log('changed')}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  );
};

export default Toogle;
