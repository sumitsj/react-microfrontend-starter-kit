import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Marbella/Button",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    disabled: false,
    text: "Primary",
  }
}

export const Secondary: Story = {
  args: {
    primary: false,
    disabled: false,
    text: "Secondary",
  }
}

export const Disabled: Story = {
  args: {
    primary: false,
    disabled: true,
    text: "Disabled",
  }
}

export const Small: Story = {
  args: {
    primary: true,
    disabled: false,
    size: "small",
    text: "Small",
  }
}

export const Medium: Story = {
  args: {
    primary: true,
    disabled: false,
    size: "medium",
    text: "Medium",
  }
}

export const Large: Story = {
  args: {
    primary: true,
    disabled: false,
    size: "large",
    text: "Large",
  }
}
