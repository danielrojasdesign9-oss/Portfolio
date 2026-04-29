import type { Meta, StoryObj } from '@storybook/react';
import { ProjectHero } from './ProjectHero';

const meta: Meta<typeof ProjectHero> = {
  title: 'Components/UntitledUI/ProjectHero',
  component: ProjectHero,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProjectHero>;

export const Default: Story = {
  args: {
    badgeText: 'Portfolio 2026',
    badgeLinkText: 'See my latest work',
    titleLine1: 'Design that connects',
    titleLine2: 'and converts.',
    description: 'I design to transform behaviors, solve complex problems, and build impactful experiences. I believe in accessible, sustainable, and universal solutions.',
    primaryButtonText: 'Let\'s talk',
    secondaryButtonText: 'View Resume',
  },
};
