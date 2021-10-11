import { rest } from 'msw';
import { db } from 'mocks/db';
import faker from 'faker';

export const notes = [
  rest.get('/notes', (req, res, ctx) => {
    const notes = db.note.getAll();
    return res(ctx.status(200), ctx.json({ notes }));
  }),
  rest.post('/notes', (req, res, ctx) => {
    if (req.body.title && req.body.content) {
      const newNote = {
        id: faker.datatype.uuid(),
        title: req.body.title,
        content: req.body.content,
      };
      db.note.create(newNote);
      return res(ctx.status(201), ctx.json({ note: newNote }));
    }

    return res(ctx.status(200), ctx.json({ error: 'Every note needs title and content' }));
  }),
  rest.delete('/notes/:id', (req, res, ctx) => {
    if (req.params.id) {
      db.note.delete({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
      return res(ctx.status(200), ctx.json({ message: 'Note has been deleted' }));
    }
    return res(ctx.status(200), ctx.json({ message: 'Id of note is required' }));
  }),
];
