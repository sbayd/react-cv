import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CV from 'react-cv'

storiesOf('Button', module)
  .addDecorator(withInfo)
  .addParameters({
    info: {
      inline: true,
    }
  })
  .add('CV', () => (
   <CV />));