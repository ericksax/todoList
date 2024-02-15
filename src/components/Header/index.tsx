import Logo from "/assets/logo.svg";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
    </Container>
  );
}
