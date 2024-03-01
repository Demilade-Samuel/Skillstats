import { ButtonContainer } from "./button.styles";

const CustomButton = ({ children, primary, href }) => {
  return (
    <ButtonContainer href={href} primary={primary}>
      <span>{children}</span>
    </ButtonContainer>
  );
};

export default CustomButton;
