import { keyframes } from "styled-components";

export const fadeIn = keyframes`
0% { opacity: 0}
100% { opacity: 1}
`;

export const fadeInDelayed30 = keyframes`
  0% { opacity: 0}
  30% { opacity: 0}
  100% {opacity: 1}
`;

export const fadeInDelayed50 = keyframes`
  0% {opacity: 0}
  50% {opacity: 0}
  100% {opacity: 1}
`;
