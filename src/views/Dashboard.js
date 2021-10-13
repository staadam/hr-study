import UsersList from 'components/organisms/UsersList/UsersList';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { Wrapper } from './Dashboard.styled';
import { GroupNavigation } from 'components/molecules/GroupNavigation/GroupNavigation.js';
import { useParams, Redirect } from 'react-router-dom';
import React, { useState } from 'react';
import { useModal } from 'components/organisms/Modal/useModal';
import { Modal } from 'components/organisms/Modal/Modal';
import { StudentDetails } from 'components/molecules/StudentDetails/StudentDetails';
import { useGetGroupsQuery, useGetStudentsDetailsMutation, useGetStudentsByGroupQuery } from 'store/store';
import { useError } from 'hooks/useError';

export const Dashboard = () => {
  const { dispatchError } = useError();
  const { group } = useParams();
  const [currentStudent, setCurrenStudent] = useState([]);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();
  const [getStudentsDetails] = useGetStudentsDetailsMutation();
  const studentsByGroup = useGetStudentsByGroupQuery(group);

  const handleOpenStudentDetails = async (id) => {
    try {
      const { data } = await getStudentsDetails(id);
      setCurrenStudent(data.student);
      handleOpenModal();
    } catch (e) {
      dispatchError(`Couldn't load students details. Please try again later`);
    }
  };

  if (isLoading || studentsByGroup.isLoading) return <Wrapper>Loading...</Wrapper>;

  if (!group && data.groups.length > 0) return <Redirect to="/group/A" />;

  return (
    <Wrapper>
      <GroupNavigation groups={data.groups} group={group} />
      <ViewWrapper>
        <UsersList users={studentsByGroup.data.students} handleOpenStudentDetails={handleOpenStudentDetails} />

        {currentStudent ? (
          <Modal isOpen={isOpen} handleClose={handleCloseModal}>
            <StudentDetails currentStudent={currentStudent} updateStudentDetails={setCurrenStudent} />
          </Modal>
        ) : null}
      </ViewWrapper>
    </Wrapper>
  );
};
