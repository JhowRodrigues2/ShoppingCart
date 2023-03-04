import styled, { keyframes } from "styled-components";
const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const LoaderIcon = styled.div`
  animation: ${Rotate} 2s linear infinite;
  position: absolute;
  left: 50%;
  margin-top: 40px;
  font-size: 50px;
  margin-left: -25px;
`;
