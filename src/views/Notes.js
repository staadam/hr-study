import React from 'react';
import { Wrapper, FormWrapper, StyledFormField, NotesWrapper } from './Notes.styled';
import { Button } from 'components/atoms/Button/Button';
import { Note } from 'components/molecules/Note/Note';
import { useAddNoteMutation, useGetNotesQuery } from 'store/store';
import { useForm } from 'react-hook-form';
import { SEO } from '../components/molecules/SEO/SEO';

export const Notes = () => {
  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
    reset({ title: '', content: '' });
  };

  const [addNote] = useAddNoteMutation();
  const { data, isLoading } = useGetNotesQuery();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <Wrapper>
      <SEO directory={'Notes'} />
      <FormWrapper>
        <StyledFormField label="Title" name="title" id="title" {...register('title', { required: true })} />
        {errors.title ? 'Title is required' : null}
        <StyledFormField
          isTextarea
          label="Content"
          name="content"
          id="content"
          {...register('content', { required: true })}
        />
        {errors.content ? 'Content of the note is required' : null}
        <Button onClick={handleSubmit(handleAddNote)}>Add</Button>
      </FormWrapper>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => (
              <Note key={id} title={title} content={content} id={id} />
            ))
          ) : (
            <p>No notes so far</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};
