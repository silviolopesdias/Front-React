import styled from "styled-components";

export const Button = styled.button`
  width: 342px;
  height: 74px;
  background: ${(props) =>
    props.isBack ? "transparent" : "rgba(0, 0, 0, 0.8)"};
  border-radius: 14px;
  border: ${(props) => (props.isBack ? "1px solid #fff" : "none")};
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 28px;
  color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 132px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

  ${(props) =>
    props.isBack &&
    `   
  img {
    transform:rotateY(180deg);
  }
  
  
  `}
`;
