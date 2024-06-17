import { fn, expect, userEvent, within } from "@storybook/test";
import Typography from "./Typography.vue";

export default {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    docs: {
      subtitle: "Displays a standard headers",
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "t-text-xl",
        "t-text-lg",
        "t-text-md",
        "t-text-sm",
        "t-text-xs",
      ],
      control: {
        type: "select",
        labels: {
          h1: "Heading 1",
          h2: "Heading 2",
          h3: "Heading 3",
          h4: "Heading 4",
          h5: "Heading 5",
          "t-text-xl": "Extra large body text",
          "t-text-lg": "Large body text",
          "t-text-md": "Medium body text",
          "t-text-sm": "Small body text",
          "t-text-xs": "Extra small body text",
        },
      },
    },
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

/**
 * Typography options with Headings
 */
export const Heading = {
  args: {
    primary: true,
    type: "h1",
    text: "De geschatte waarde van jouw woning",
    showDot: true,
  },
  argTypes: {
    type: {
      options: ["h1", "h2", "h3", "h4", "h5"],
    },
  },
};

export const Heading_noDot = {
  args: {
    primary: true,
    type: "h1",
    text: "Ik heb geen punt",
  },
  argTypes: {
    type: {
      options: ["h1", "h2", "h3", "h4", "h5"],
    },
  },
};

/**
 * Typography options with Body text
 */

export const Body_texts = {
  args: {
    primary: true,
    type: "p-xl",
    text: "Ooit zelf een huis gezocht, gekocht of verkocht? Dan weet je hoe lastig dit proces kan zijn.",
  },
  argTypes: {
    type: {
      options: [
        "t-text-xl",
        "t-text-lg",
        "t-text-md",
        "t-text-sm",
        "t-text-xs",
      ],
    },
  },
};
