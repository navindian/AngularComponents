import { addParameters } from '@storybook/client-api';
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import '@storybook/addon-console';
import { setConsoleOptions } from '@storybook/addon-console';
import { withConsole } from '@storybook/addon-console';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS, 
    defaultViewport: 'iphone6' // newViewports would be an ViewportMap. (see below for examples)
  },
});
