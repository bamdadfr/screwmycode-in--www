import React from 'react';
import { render as defaultRender } from '@testing-library/react';
import { DefaultLayout } from './default.layout';
import { WithStyledComponents } from '../../app/components/with-styled-components/with-styled-components';

const render = () => {
  const Children = () => <span>test</span>;

  const { container } = defaultRender (
    <WithStyledComponents>
      <DefaultLayout>
        <Children />
      </DefaultLayout>,
    </WithStyledComponents>,
  );

  return {
    container,
  };
};

describe ('DefaultLayout', () => {
  describe ('container', () => {
    it ('should be in the document, visible and not empty', () => {
      const { container } = render ();
      expect (container).toBeInTheDocument ();
      expect (container).toBeVisible ();
      expect (container).not.toBeEmptyDOMElement ();
    });
  });
});
