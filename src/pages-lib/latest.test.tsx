import {render as defaultRender} from '@testing-library/react';
import React from 'react';

import {ThemeWrapper} from '../app/components/theme-wrapper/theme-wrapper';
import LatestPage from '../pages/latest';

const render = () => {
  const {container} = defaultRender(
    <ThemeWrapper>
      <LatestPage
        latest={[
          {
            slug: '1',
            title: 'title',
            description: 'description',
            url: '',
            image: 'https://i.imgur.com/5EOyTDQ.jpg',
            date: 'date',
          },
        ]}
      />
    </ThemeWrapper>,
  );

  return {
    container,
  };
};

describe('LatestPage', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
