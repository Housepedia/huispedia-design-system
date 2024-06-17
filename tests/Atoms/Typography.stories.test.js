import { expect } from '@storybook/test-runner';
import { userEvent, within } from '@storybook/testing-library';
import { composeStories } from '@storybook/vue3';
import * as stories from '../../src/stories/Atoms/Typography'; 

const { Heading, Heading_noDot, Body_texts } = composeStories(stories);

describe('Typography Component', () => {
  it('renders the heading with a dot', async () => {
    const { container } = await Heading.play({ canvasElement: document.body });

    const heading = within(container).getByRole('heading', { name: /De geschatte waarde van jouw woning./i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('hp-title-h1');
    expect(heading.querySelector('span.t-text-primary')).toBeInTheDocument();
  });

  it('renders the heading without a dot', async () => {
    const { container } = await Heading_noDot.play({ canvasElement: document.body });

    const heading = within(container).getByRole('heading', { name: /Ik heb geen punt/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('hp-title-h1');
    expect(heading.querySelector('span.t-text-primary')).not.toBeInTheDocument();
  });

  it('renders the body text with appropriate class', async () => {
    const { container } = await Body_texts.play({ canvasElement: document.body });

    const paragraph = within(container).getByText(/Ooit zelf een huis gezocht, gekocht of verkocht?/i);
    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toHaveClass('t-text-xl');
  });

  it('emits the click event', async () => {
    const { container, args } = await Heading.play({ canvasElement: document.body });

    const heading = within(container).getByRole('heading', { name: /De geschatte waarde van jouw woning./i });
    await userEvent.click(heading);

    expect(args.onClick).toHaveBeenCalled();
  });
});
