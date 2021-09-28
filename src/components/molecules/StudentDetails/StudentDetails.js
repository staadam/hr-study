import { StyledTitle as Title } from 'components/atoms/Title/Title';
import { Attendance } from 'components/atoms/Attendance/Attendance';
import { Average } from 'components/atoms/Average/Average';

export const StudentDetails = ({ currentStudent }) => {
  return (
    <div>
      <Title>
        {currentStudent.name} | Group {currentStudent.group}
      </Title>
      <Attendance user={currentStudent} />

      <Average average={currentStudent.average} />
    </div>
  );
};
