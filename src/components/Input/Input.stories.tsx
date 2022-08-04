import { ComponentStory } from '@storybook/react';
import { useForm } from 'react-hook-form';
import { Input } from './Input';

export default {
  title: 'Input',
  component: Input,
};

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const StoryInput: ComponentStory<typeof Input> = (args) => {
  const { register, watch } = useForm();

  return (
    <Input
      {...args}
      inputOptions={register('title')}
      valueWatcher={watch('title')}
    />
  );
};

export const InputUncontrolled = Template.bind({});
InputUncontrolled.args = {
  error: '',
  valueWatcher: '',
  label: 'Title',
  type: 'text',
  disabled: false,
  inputOptions: {
    name: 'title',
    onChange: () => {},
    onBlur: () => {},
    ref: () => {},
  },
};

export const InputControlled = StoryInput.bind({});
InputControlled.args = {
  ...InputUncontrolled.args,
};

export const InputError = StoryInput.bind({});
InputError.args = {
  ...InputUncontrolled.args,
  error: 'Error!',
};
