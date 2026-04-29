import type { Meta, StoryObj } from '@storybook/react';
import ProjectCard from './ProjectCard';

const meta: Meta<typeof ProjectCard> = {
  title: 'Components/ProjectCard',
  component: ProjectCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    category: { control: 'text' },
    slug: { control: 'text' },
    imageUrl: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ProjectCard>;

export const Default: Story = {
  args: {
    title: 'Silin',
    category: 'Tax management',
    slug: 'silin',
    imageUrl: 'https://framerusercontent.com/images/ahVYlOGVmRQtilp8rIMzHACkLwg.png',
  },
};

export const WithoutImage: Story = {
  args: {
    title: 'Confidential Project',
    category: 'Fintech',
    slug: 'confidential',
    imageUrl: '',
  },
};
