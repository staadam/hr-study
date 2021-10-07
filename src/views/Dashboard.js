import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Wrapper } from './Dashboard.styled';
import { GroupNavigation } from 'components/molecules/GroupNavigation/GroupNavigation.js';
import { useParams, Redirect } from 'react-router-dom';
import { useStudents } from 'hooks/useStudents';
import React, { useState, useEffect } from 'react';
import { useModal } from 'components/organisms/Modal/useModal';
import { Modal } from 'components/organisms/Modal/Modal';
import { StudentDetails } from 'components/molecules/StudentDetails/StudentDetails';

export const Dashboard = () => {
  const { group } = useParams();
  const { getGroups, getStudentsByGroup, getStudentsById } = useStudents();

  const [groups, setGroups] = useState([]);
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrenStudent] = useState([]);

  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  useEffect(() => {
    (async () => {
      const students = await getStudentsByGroup(group);
      setStudents(students);
    })();
  }, [getStudentsByGroup, group]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentsById(id);
    setCurrenStudent(student);
    handleOpenModal();
  };

  if (!group && groups.length > 0) return <Redirect to="/group/A" />;

  return (
    <Wrapper>
      <GroupNavigation groups={groups} group={group} />
      <ViewWrapper>
        <UsersList users={students} handleOpenStudentDetails={handleOpenStudentDetails} />

        {currentStudent ? (
          <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            <StudentDetails currentStudent={currentStudent} />
          </Modal>
        ) : null}
      </ViewWrapper>
    </Wrapper>
  );
};
