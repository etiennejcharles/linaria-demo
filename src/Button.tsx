import { css } from "linaria";

const buttonStyle = css`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

export const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className={buttonStyle}>{children}</button>;
};
