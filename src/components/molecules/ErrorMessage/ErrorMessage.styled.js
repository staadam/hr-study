import styled, { keyframes } from 'styled-components';
import { Title } from 'components/atoms/Title/Title';

const shrinkAnimation = keyframes`
  0%{
    transform: translateX(-50%) scaleX(1);
  }

  100% {
    transform: translateX(-50%) scaleX(0);
  }
`;

const slideAnimation = keyframes`
  0%{
    transform: translate(-50%,0);
  }

  100% {
    transform: translate(-50%,500%);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  max-width: 500px;
  padding: 35px 25px;
  border: 3px solid ${({ theme }) => theme.colors.error};
  border-radius: 15px;
  background-color: #fff;
  color: ${({ theme }) => theme.colors.error};
  transform: translate(-50%, 0);
  animation: ${slideAnimation} ease-in-out 0.5s 1 reverse, ${slideAnimation} ease-in-out 0.5s 5.5s 1 forwards;
  z-index: 999;

  p {
    margin: 0;
    margin-top: 10px;
  }

  &::after,
  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 90px;
    height: 5px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.error};
    transform: translateX(-50%);
    transform-origin: 0 50%;
  }

  &::after {
    opacity: 0.5;
  }

  &::before {
    transform: translateX(-50%) scaleX(1);
    animation: ${shrinkAnimation} 5s 0.5s linear 1 forwards;
  }

  ${Title} {
    color: ${({ theme }) => theme.colors.error};
    margin: 0;
  }
`;
