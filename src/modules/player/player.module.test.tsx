import {render as defaultRender} from '@testing-library/react';
import React from 'react';

import {ThemeWrapper} from '../../app/components/theme-wrapper/theme-wrapper';
import {PlayerModule} from './player.module';

const render = () => {
  const {container} = defaultRender(
    <ThemeWrapper>
      <PlayerModule />
    </ThemeWrapper>,
  );

  return {
    container,
  };
};

describe('PlayerModule', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
