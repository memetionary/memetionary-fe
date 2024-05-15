import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '.';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  name: 'TextArea',
  args: { showTextLength: true },
  render: () => <TextArea />,
};
