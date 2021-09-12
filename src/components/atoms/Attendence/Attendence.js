import styled from 'styled-components';

const StyledAttendence = styled.div`
  margin: 20px;

  & p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: bold;
  }

  & p:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
  }

  & p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

const Attendence = ({ user: { name, attendence } }) => {
  return (
    <StyledAttendence>
      <p>{name}</p>
      <p>attendence: {attendence}</p>
    </StyledAttendence>
  );
};

export default Attendence;
