import React from 'react';
import {render as defaultRender} from '@testing-library/react';
import TopPage from '../pages/top';
import {WithTheme} from '../app/components/with-theme/with-theme';

const render = () => {
  const {container} = defaultRender(
    <WithTheme>
      <TopPage
        top={[
          {
            id: '1',
            title: 'title',
            description: 'description',
            url: '',
            image: 'https://i.imgur.com/5EOyTDQ.jpg',
            date: 'date',
          },
        ]}
      />
    </WithTheme>,
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
