import styled from 'styled-components';

const StyledAttendance = styled.div`
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

export const Attendance = ({ user: { name, attendance } }) => {
  return (
    <StyledAttendance>
      <p>{name}</p>
      <p>attendance: {attendance}</p>
    </StyledAttendance>
  );
};
