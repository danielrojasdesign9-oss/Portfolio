import type { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from './HeroSection';

const meta: Meta<typeof HeroSection> = {
  title: 'Components/UntitledUI/HeroSection',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen', // Hero sections usually take up the full screen
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

export const Default: Story = {
  args: {
    badgeText: 'New portfolio',
    badgeLinkText: 'See how it was built',
    titleLine1: 'Design that connects',
    titleLine2: 'and converts.',
    description: 'I design to transform behaviors, solve complex problems, and build impactful experiences. I believe in accessible, sustainable, and universal solutions.',
    primaryButtonText: 'View Work',
    secondaryButtonText: 'About Me',
  },
};
