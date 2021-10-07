import { ErrorMessage } from './ErrorMessage';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export default {
  title: 'components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => (
  <Wrapper>
    <ErrorMessage {...args} />
  </Wrapper>
);

export const Default = Template.bind({});
Default.args = {};
