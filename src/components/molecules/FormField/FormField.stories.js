import { FormField } from './FormField';

export default {
  title: 'components/Molecules/FormField',
  component: FormField,
};

const Template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'login',
};

export const LongLabel = Template.bind({});
Default.args = {
  label: 'Very very very very very very long label',
};
