/** @type { import('@storybook/vue3').Preview } */
import '../public/fonts/fonts.css';
import '../src/sass/main.scss';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
