import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import TopPage from '../pages/top';
import {ThemeWrapper} from '../app/components/theme-wrapper/theme-wrapper';

const render = () => {
  const {container} = defaultRender(
    <ThemeWrapper>
      <TopPage
        top={[
          {
            id: '1',
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
