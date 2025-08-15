import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'number'],
      description: 'The type of input field'
    },
    clearable: {
      control: { type: 'boolean' },
      description: 'Whether to show a clear button when input has value'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text for the input'
    },
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
  }
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter your password",
  }
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
  }
};

export const Clearable: Story = {
  args: {
    placeholder: "Type something to see clear button",
    clearable: true,
  }
};
