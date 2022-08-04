import { ComponentStory } from '@storybook/react';
import { Error } from './Error';

export default {
  title: 'Error',
  component: Error,
};

const StoryError: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const ErrorMessage = StoryError.bind({});
ErrorMessage.args = {
  children: 'Error message',
};
