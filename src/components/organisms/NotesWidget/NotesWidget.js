import React, { useState } from 'react';
import { Note } from '../../molecules/Note/Note';
import { Wrapper, WidgetHandler, NotesWrapper } from './NotesWidget.styled';
import { useGetNotesQuery } from 'store/store';

export const NotesWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, isLoading } = useGetNotesQuery();

  const handleOpenWidget = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler isOpen={isOpen} onClick={handleOpenWidget}>
        notes
      </WidgetHandler>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ id, title, content }) => <Note key={id} title={title} content={content} id={id} />)
          ) : (
            <p>No notes so far</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};
