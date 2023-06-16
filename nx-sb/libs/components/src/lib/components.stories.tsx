import type { Meta, StoryObj } from '@storybook/react';
import { Components } from './components';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const Story: Meta<typeof Components> = {
  component: Components,
  title: 'Components',
};
export default Story;

export const Test: StoryObj<typeof Components> = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');
    userEvent.click(button);

    const checkbox = canvas.getByText('Toyota');
    expect(checkbox.getAttribute('aria-colindex')).toBe('1');
  },
};
