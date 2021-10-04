import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

const groups = ['A', 'B', 'C'];

const getRandomGroup = (index) => groups[index];
const getRandomAverage = () => faker.datatype.number({ min: 2, max: 5, precision: 0.1 });

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}`,
    average: getRandomAverage,
    group: () => getRandomGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        name: 'Business Philosophy',
        average: getRandomAverage(),
      },
      {
        name: 'Marketing',
        average: getRandomAverage(),
      },
      {
        name: 'Modern Economy',
        average: getRandomAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(String),
  },
});
