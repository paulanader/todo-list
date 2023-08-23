import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Logo" />
    </HeaderContainer>
  );
};
