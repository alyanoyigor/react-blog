import { ComponentStory } from '@storybook/react';
import { Pagination } from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: { onClick: { action: 'clicked' } },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#0a0a0a' },
        { name: 'light', value: '#fafafa' },
      ],
    },
  },
};

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const PaginationDark = Template.bind({});
PaginationDark.args = {
  itemsPerPage: 10,
  itemsCount: 50,
  currentPage: 1,
  onPaginate: () => {},
  theme: 'dark',
};

export const PaginationLight = Template.bind({});
PaginationLight.parameters = {
  backgrounds: { default: 'light' },
};
PaginationLight.args = {
  ...PaginationDark.args,
  theme: 'light',
};
