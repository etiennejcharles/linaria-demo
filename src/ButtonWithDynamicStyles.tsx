import React from "react";
import { css } from "linaria";
import { styled } from "linaria/react";
import classNames from "classnames";

// Define global CSS variables for button padding and color
const globalStyles = css`
  :global() {
    :root {
      --button-padding-small: 6px 12px;
      --button-padding-medium: 10px 20px;
      --button-padding-large: 14px 28px;
      --button-color-primary: blue;
      --button-color-secondary: gray;
    }
  }
`;

// Base button style
const buttonBase = css`
  border-radius: 4px;
  border: none;
  cursor: pointer;
  color: white;
`;

// Variant styles using CSS variables for color
const primaryStyle = css`
  ${buttonBase}
  background-color: var(--button-color-primary);
`;

const secondaryStyle = css`
  ${buttonBase}
  background-color: var(--button-color-secondary);
`;

// Create a styled button component that accepts size as a prop
const StyledButton = styled.button<{ size: "small" | "medium" | "large" }>`
  ${buttonBase}
  padding: var(--button-padding-${(props) => props.size});
`;

type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
};

export const ButtonWithDynamicStyles: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "medium",
  children,
}) => {
  const variantClass = variant === "primary" ? primaryStyle : secondaryStyle;

  return (
    <StyledButton
      className={classNames(globalStyles, variantClass)}
      size={size}
    >
      {children}
    </StyledButton>
  );
};
