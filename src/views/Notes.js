import React from 'react';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styled';
import { Button } from 'components/atoms/Button/Button';
import { Note } from 'components/molecules/Note/Note';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, removeNote } from 'store/store';

export const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = () => {
    dispatch(addNote({ title: `New note ${Math.floor(Math.random() * 100)}`, content: 'Lorem ipsum dolor sit amet' }));
  };

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" />
        <StyledFormField isTextarea label="Notes" name="notes" id="notes" />
        <Button onClick={handleAddNote}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? notes.map(({ id, title, content }) => <Note key={id} title={title} content={content} id={id} />) : <p>No notes so far</p>}
      </NotesWrapper>
    </Wrapper>
  );
};
