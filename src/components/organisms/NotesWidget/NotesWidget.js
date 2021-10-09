import React, { useState } from 'react';
import { Note } from '../../molecules/Note/Note';
import { Wrapper, WidgetHandler, NotesWrapper } from './NotesWidget.styled';
import { useSelector } from 'react-redux';

export const NotesWidget = () => {
  const notes = useSelector((state) => state.notes);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWidget = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Wrapper isOpen={isOpen}>
      <WidgetHandler onClick={handleOpenWidget}>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? notes.map(({ title, content, id }) => <Note key={id} title={title} content={content} id={id} />) : <p>No notes so far</p>}
      </NotesWrapper>
    </Wrapper>
  );
};
