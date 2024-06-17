import { fn, expect, userEvent, within } from "@storybook/test";
import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    docs: {
      subtitle: "Displays a standard button",
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

/**
 * Button option with Primary (default) appearance
 */
export const Primary = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary = {
  args: {
    label: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const WithInteractions = {
  args: {
    size: "small",
    href: "http://storybook.js.org",
    children: "Button",
  },
  play: async ({ canvasElement }) => {
    // Assigns canvas to the component root element
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("link"));
    expect(canvas.getByRole("link")).toHaveAttribute(
      "href",
      "http://storybook.js.org"
    );
  },
};

/*
 * New story using Controls
 * Read more about Storybook templates at:
 * https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
export const Controls = {
  args: {
    size: "small",
    label: "Button with Controls",
    href: "http://storybook.js.org",
  },
};
