import { UserListItem } from './UserListItem';

export default {
  title: 'components/Molecules/UserListItem',
  component: UserListItem,
};

const Template = (args) => <UserListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: { name: 'Adam Romański', attendance: '70%', average: '3.3' },
};

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  user: { name: 'Kasia Drożdżewska', attendance: '95%', average: '5.0' },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  user: { name: 'Kacper Bąkiewicz', attendance: '51%', average: '2.1' },
};

export const NoAvarage = Template.bind({});
NoAvarage.args = {
  user: { name: 'Kacper Bąkiewicz', attendance: '51%', avarage: null },
};
