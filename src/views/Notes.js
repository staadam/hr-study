import React from 'react';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styled';
import { Button } from 'components/atoms/Button/Button';
import { Note } from 'components/molecules/Note/Note';
import { useSelector, useDispatch } from 'react-redux';
import { addNote } from 'store/store';
import { useForm } from 'react-hook-form';

export const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = ({ title, content }) => {
    dispatch(addNote({ title, content }));
    reset({ title: '', content: '' });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        {errors.title ? 'Title is required' : null}
        <StyledFormField isTextarea label="Notes" name="notes" id="notes" {...register('content', { required: true })} />
        {errors.content ? 'Content of the note is required' : null}
        <Button onClick={handleSubmit(handleAddNote)}>Add</Button>
      </FormWrapper>
      <NotesWrapper>
        {notes.length ? notes.map(({ id, title, content }) => <Note key={id} title={title} content={content} id={id} />) : <p>No notes so far</p>}
      </NotesWrapper>
    </Wrapper>
  );
};
