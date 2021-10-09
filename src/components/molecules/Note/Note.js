import React from 'react';
import { NoteWrapper, StyledDeleteButton } from './Note.styled';
import { Title } from 'components/atoms/Title/Title';
import { useDispatch } from 'react-redux';
import { removeNote } from 'store/store';

export const Note = ({ title = 'untitled', content = 'no content', id }) => {
  const dispatch = useDispatch();
  const handleDeleteNote = () => dispatch(removeNote({ id }));

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleDeleteNote} />
    </NoteWrapper>
  );
};
