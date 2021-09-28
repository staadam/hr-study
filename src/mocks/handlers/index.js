import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.get('/groups/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudents = students.filter((student) => req.params.id === student.group);
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ students }));
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const { studentName } = req.body;
    const matchingStudents = studentName ? students.filter((student) => student.name.toLowerCase().includes(studentName.toLowerCase())) : [];
    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),
  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudents = students.find((student) => student.id === req.params.id);
      if (!matchingStudents) {
        return res(ctx.status(404), ctx.json({ error: 'No maching student' }));
      }
      return res(ctx.status(200), ctx.json({ student: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ student: {} }));
  }),
];
