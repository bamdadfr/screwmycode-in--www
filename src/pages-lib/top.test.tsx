import {render as defaultRender} from '@testing-library/react';
import React from 'react';

import {ThemeWrapper} from '../app/components/theme-wrapper/theme-wrapper';
import TopPage from '../pages/top';

const render = () => {
  const {container} = defaultRender(
    <ThemeWrapper>
      <TopPage
        top={[
          {
            slug: '1',
            title: 'title',
            image: 'https://i.imgur.com/5EOyTDQ.jpg',
            icon: 'string',
            onClick: () => undefined,
            type: 'youtube',
          },
        ]}
      />
    </ThemeWrapper>,
  );

  return {
    container,
  };
};

describe('TopPage', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
