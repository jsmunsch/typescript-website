import styled from "styled-components";
import { fadeIn } from "../../animations/fadeIn";

const OuterBox = styled.div`
  width: 80%;
  height: 70%;
  background: transparent;
  display: flex;
  box-shadow: -1px -1px 64px 0px rgba(0, 0, 0, 0.75);
  animation: ${fadeIn} 2s ease-in-out;
`;

export default OuterBox;
