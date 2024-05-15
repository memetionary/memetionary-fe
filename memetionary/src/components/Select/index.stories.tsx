import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';
import { CONTACT_OPTIONS } from './constants';

const meta: Meta<typeof Select> = {
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  name: 'Select',
  args: { options: CONTACT_OPTIONS },
};
