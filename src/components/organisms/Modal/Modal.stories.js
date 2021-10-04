import { Modal } from './Modal';
import { StudentDetails } from 'components/molecules/StudentDetails/StudentDetails';

export default {
  title: 'components/organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails {...args} />
  </Modal>
);

export const Students = Template.bind({});
Students.args = {
  currentStudent: {
    id: '2',
    name: 'Krzysztof Batko',
    attendance: '23%',
    average: '2.3',
    group: 'A',
    course: 'Business Philosophy',
    grades: [
      {
        name: 'Bussiness Philosophy',
        average: '3.3',
      },
      {
        name: 'Marketing',
        average: '4.7',
      },
      {
        name: 'Modern Economy',
        average: '2.5',
      },
    ],
  },
};
