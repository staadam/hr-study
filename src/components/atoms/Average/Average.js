import { StyledAverage } from './Average.styles';

export const Average = ({ average }) => {
  return <StyledAverage average={average}> {average} </StyledAverage>;
};
