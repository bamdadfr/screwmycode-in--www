import {act, render as defaultRender, waitFor} from '@testing-library/react';
import React from 'react';

import {DotsComponent} from './dots.component';

const render = () => {
  const {container} = defaultRender(<DotsComponent />);
  return {
    container,
  };
};

jest.useFakeTimers();

describe('DotsComponent', () => {
  describe('container', () => {
    let container;

    it('should initialize, print default value then increment dot', async () => {
      act(() => {
        container = render().container;
      });

      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).toBeEmptyDOMElement();

      expect(container).toHaveTextContent('');

      await waitFor(() => {
        expect(container).toHaveTextContent('.');
      });
    });
  });
});
