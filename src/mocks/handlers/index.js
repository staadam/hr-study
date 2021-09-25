import { rest } from 'msw';
import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';

export const handlers = [
  rest.get('/groups', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ groups }));
  }),
  rest.post('/students/search', (req, res, ctx) => {
    const { studentName } = req.body;
    const matchingStudents = studentName ? students.filter((student) => student.name.toLowerCase().includes(studentName.toLowerCase())) : [];
    return res(ctx.status(200), ctx.json({ students: matchingStudents }));
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const matchingStudents = students.filter((student) => req.params.group === student.group);
      return res(ctx.status(200), ctx.json({ students: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ students }));
  }),
];
