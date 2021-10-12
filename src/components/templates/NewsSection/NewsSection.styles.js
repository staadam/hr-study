import styled, { keyframes } from 'styled-components';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  90% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.section`
  grid-row: 1/3;
  grid-column: 3/4;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 50px;
  border-left: ${({ theme, isClear }) => (isClear ? 'none' : `1px solid ${theme.colors.darkPurple}`)};
  overflow-y: ${({ isClear }) => (isClear ? 'visible' : 'scroll')};

  @media (max-width: 1200px) {
    display: ${({ isClear }) => (isClear ? 'flex' : 'none')};
  }
`;

export const NewsSectionHeader = styled.h2`
  margin-right: auto;
  color: ${({ theme }) => theme.colors.darkGrey};
`;

export const ArticleWrapper = styled(ViewWrapper)`
  margin: 30px 0;
  width: 100%;
  max-width: unset;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.darkGrey};

  p {
    line-height: 1.6;
  }
`;

export const TitleWrapper = styled.div`
  h3 {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    margin: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;

  img {
    max-width: 200px;
    margin-left: 35px;
    object-fit: cover;
  }

  @media (max-width: 1440px) {
    flex-direction: column;
  }
`;

const StyledLoading = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 50px auto;
`;

const LoadingDot = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  animation: ${rotate} 2s ease-in-out infinite;
  animation-delay: ${({ delay }) => `${delay}s`};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;

export const Loading = ({ children }) => {
  let dots = [];

  for (let i = 1; i <= 5; i++) {
    dots.push(<LoadingDot key={i} delay={i / 10} />);
  }

  return <StyledLoading data-testid="loader">{dots}</StyledLoading>;
};
