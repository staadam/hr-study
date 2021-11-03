import React from 'react';
import { NoteWrapper, StyledDeleteButton } from './Note.styled';
import { Title } from 'components/atoms/Title/Title';
import { useDeleteNoteMutation } from 'store/store';

export const Note = ({ title = 'untitled', content = 'no content', id }) => {
  const [deleteNote] = useDeleteNoteMutation();
  const handleDeleteNote = () => deleteNote(id);

  return (
    <NoteWrapper>
      <Title>{title}</Title>
      <p>{content}</p>
      <StyledDeleteButton onClick={handleDeleteNote} />
    </NoteWrapper>
  );
};
