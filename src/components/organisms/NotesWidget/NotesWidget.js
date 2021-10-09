import React from 'react';
import { Note } from '../../molecules/Note/Note';
import { Wrapper, WidgetHandler, NotesWrapper } from './NotesWidget.styled';
import { useSelector } from 'react-redux';

export const NotesWidget = () => {
  const notes = useSelector((state) => state.notes);
  return (
    <Wrapper isOpen>
      <WidgetHandler>notes</WidgetHandler>
      <NotesWrapper>
        {notes.length ? notes.map(({ title, content, id }) => <Note key={id} title={title} content={content} id={id} />) : <p>No notes so far</p>}
      </NotesWrapper>
    </Wrapper>
  );
};
