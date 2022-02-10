import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import AboutPage from '../pages/about';
import {WithTheme} from '../app/components/with-theme/with-theme';

const render = () => {
  const {container} = defaultRender(
    <WithTheme>
      <AboutPage />
    </WithTheme>,
  );

  return {
    container,
  };
};

describe('AboutPage', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
