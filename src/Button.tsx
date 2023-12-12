import React, { useState } from 'react';
import styled from 'styled-components';

// StyledButton component with styling
const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#ccc' : '#3498db')};
  color: #fff;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#2980b9')};
  }
`;

// Types for the ButtonProps
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
}

// The button component
const Button: React.FC<ButtonProps> = ({ onClick, children, disabled }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
  };

  return (
    <StyledButton onClick={handleClick} disabled={disabled || isClicked}>
      {children}
    </StyledButton>
  );
};

export default Button;

