import { rest } from 'msw';
import { db } from 'mocks/db';

export const students = [
  rest.post('/students/search', (req, res, ctx) => {
    const { studentName } = req.body;
    const matchingStudents = studentName ? db.student.findMany({ where: { name: { contains: studentName } } }) : [];
    return res(ctx.status(200), ctx.json(matchingStudents));
  }),
  rest.get('/students/:id', (req, res, ctx) => {
    if (req.params.id) {
      const matchingStudents = db.student.findFirst({ where: { id: { equals: req.params.id } } });
      if (!matchingStudents) {
        return res(ctx.status(404), ctx.json({ error: 'No maching student' }));
      }
      return res(ctx.status(200), ctx.json({ student: matchingStudents }));
    }

    return res(ctx.status(200), ctx.json({ student: {} }));
  }),
  rest.post('/students/grade', (req, res, ctx) => {
    const { id, grade } = req.body;
    const updatedStudent = db.student.update({
      where: {
        id: {
          equals: id,
        },
      },
      data: {
        grades: (prevGrades) => [...prevGrades, grade],
      },
    });
    return res(ctx.status(200), ctx.json({ student: updatedStudent }));
  }),
];
