import { setupWorker } from 'msw';
import { handlers } from 'mocks/handlers';
import { db } from './db';

export const worker = setupWorker(...handlers);

const seed = () => {
  db.group.create({ id: 'A' });
  db.group.create({ id: 'B' });
  db.group.create({ id: 'C' });
  db.note.create();
  db.note.create();
  db.teacher.create();
  for (let i = 0; i < 15; i++) {
    db.student.create();
  }
};

seed();
