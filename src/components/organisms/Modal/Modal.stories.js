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

export const Default = Template.bind({});
Default.args = {
  currentStudent: {
    id: '2',
    name: 'Krzysztof Batko',
    attendance: '23%',
    average: '3.3',
    group: 'A',
  },
};
