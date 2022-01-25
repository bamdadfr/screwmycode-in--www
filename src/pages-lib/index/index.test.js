import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import IndexPage from '../../pages';
import {WithStyledComponents} from '../../app/components/with-styled-components/with-styled-components';

const render = () => {
  const {container} = defaultRender(
    <WithStyledComponents>
      <IndexPage />
    </WithStyledComponents>,
  );

  return {
    container,
  };
};

describe('NotFoundPage', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
