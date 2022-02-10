import React from 'react';
import {render as defaultRender, screen} from '@testing-library/react';
import {HeaderComponent} from './header.component';

const render = () => {
  const {container} = defaultRender(<HeaderComponent />);
  return {
    container,
    home: screen.getByRole('link', {name: 'home'}),
    latest: screen.getByRole('link', {name: 'latest'}),
    top: screen.getByRole('link', {name: 'top'}),
    about: screen.getByRole('link', {name: 'about'}),
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

  describe('home', () => {
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
      expect(home instanceof HTMLAnchorElement).toBe(true);
    });
  });

  describe('latest', () => {
    it('should be in the document', () => {
      const {latest} = render();
      expect(latest).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {latest} = render();
      expect(latest).toBeVisible();
    });

    it('should be an instance of HTMlButtonElement', () => {
      const {latest} = render();
      expect(latest instanceof HTMLAnchorElement).toBe(true);
    });
  });

  describe('top', () => {
    it('should be in the document', () => {
      const {top} = render();
      expect(top).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {top} = render();
      expect(top).toBeVisible();
    });

    it('should be an instance of HTMlButtonElement', () => {
      const {top} = render();
      expect(top instanceof HTMLAnchorElement).toBe(true);
    });
  });

  describe('about', () => {
    it('should be in the document', () => {
      const {about} = render();
      expect(about).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {about} = render();
      expect(about).toBeVisible();
    });

    it('should be an instance of HTMlButtonElement', () => {
      const {about} = render();
      expect(about instanceof HTMLAnchorElement).toBe(true);
    });
  });
});
