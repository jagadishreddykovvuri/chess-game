import styled from "styled-components";

export const SquareBox = styled.button`
  background-color: ${(props) =>
    props.isThinkBox ? "RGB(245, 144, 66)" : "RGB(255, 206, 168)"};
  border: 1px solid transparent;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 48px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 48px;
`;
