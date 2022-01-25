import React from 'react';
import {render as defaultRender, screen} from '@testing-library/react';
import {HeaderComponent} from './header.component';

const render = () => {
  const {container} = defaultRender(<HeaderComponent />);
  return {
    container,
    home: screen.getByRole('button', {name: 'home'}),
  };
};

describe('HeaderComponent', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = render();
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render();
      expect(container).not.toBeEmptyDOMElement();
    });
  });

  describe('home icon', () => {
    it('should be in the document', () => {
      const {home} = render();
      expect(home).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {home} = render();
      expect(home).toBeVisible();
    });

    it('should be an instance of HTMlButtonElement', () => {
      const {home} = render();
      expect(home instanceof HTMLButtonElement).toBe(true);
    });
  });
});
