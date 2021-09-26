import { GroupNavigation } from './GroupNavigation';

export default {
  title: 'components/Molecules/GroupNavigation',
  component: GroupNavigation,
};

const Template = (args) => <GroupNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {
  groups: ['A', 'B', 'C'],
  group: 'A',
};

export const MoreGroups = Template.bind({});
MoreGroups.args = {
  groups: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  group: 'A',
};

export const NoGroupSelected = Template.bind({});
NoGroupSelected.args = {
  groups: ['A', 'B', 'C'],
  group: null,
};

export const NoGroups = Template.bind({});
NoGroups.args = {
  group: null,
};
