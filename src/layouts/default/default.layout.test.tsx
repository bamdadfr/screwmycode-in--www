import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import {DefaultLayout} from './default.layout';
import {WithTheme} from '../../app/components/with-theme/with-theme';

const render = () => {
  const Children = () => <span>test</span>;

  const {container} = defaultRender(
    <WithTheme>
      <DefaultLayout>
        <Children />
      </DefaultLayout>
    </WithTheme>,
  );

  return {
    container,
  };
};

describe('DefaultLayout', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
