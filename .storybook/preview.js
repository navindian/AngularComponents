import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, 
    defaultViewport: 'iphone6' // newViewports would be an ViewportMap. (see below for examples)
  },
  backgrounds: [
      { name: 'twitter', value: '#00aced', default: true },
      { name: 'facebook', value: '#3b5998' },
  ],
});
