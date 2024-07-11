import {cleanup, render} from '@testing-library/react';
import React from 'react';

import {defaultProps, MetaComponent} from './meta.component';

afterEach(cleanup);

describe('MetaComponent', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = render(<MetaComponent />);
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = render(<MetaComponent />);
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render(<MetaComponent />);
      expect(container).not.toBeEmptyDOMElement();
    });
  });

  describe('props', () => {
    describe('title', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);

        expect(document.title)
          .toBe(`${defaultProps.description} - ${defaultProps.title}`);
        expect(document.querySelector('meta[itemprop="name"]').content)
          .toBe(defaultProps.title);
        expect(document.querySelector('meta[name="twitter:title"]').content)
          .toBe(defaultProps.title);
        expect(document.querySelector('meta[property="og:site_name"]').content)
          .toBe(defaultProps.title);
        expect(document.querySelector('meta[property="og:title"]').content)
          .toBe(defaultProps.title);
      });

      it('should match given props', () => {
        const title = 'my testing title';
        render(<MetaComponent title={title} />);

        expect(document.title)
          .toBe(`${defaultProps.description} - ${title}`);
        expect(document.querySelector('meta[itemprop="name"]').content)
          .toBe(title);
        expect(document.querySelector('meta[name="twitter:title"]').content)
          .toBe(title);
        expect(document.querySelector('meta[property="og:site_name"]').content)
          .toBe(title);
        expect(document.querySelector('meta[property="og:title"]').content)
          .toBe(title);
      });
    });

    describe('description', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);

        expect(document.querySelector('meta[itemprop="description"]').content)
          .toBe(defaultProps.description);
        expect(document.querySelector('meta[name="twitter:description"]').content)
          .toBe(defaultProps.description);
        expect(document.querySelector('meta[property="og:description"]').content)
          .toBe(defaultProps.description);
      });

      it('should match given prop', () => {
        const description = 'this is my long testing description';
        render(<MetaComponent description={description} />);

        expect(document.querySelector('meta[itemprop="description"]').content)
          .toBe(description);
        expect(document.querySelector('meta[name="twitter:description"]').content)
          .toBe(description);
        expect(document.querySelector('meta[property="og:description"]').content)
          .toBe(description);
      });
    });

    describe('url', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);
        expect(document.querySelector('meta[property="og:url"]').content)
          .toBe(defaultProps.url);
      });

      it('should match given prop', () => {
        const url = 'http://localhost/myurl';
        render(<MetaComponent url={url} />);
        expect(document.querySelector('meta[property="og:url"]').content)
          .toBe(url);
      });
    });

    describe('image', () => {
      it('should default to defaultProps', () => {
        render(<MetaComponent />);
        expect(document.querySelector('meta[itemprop="image"]').content)
          .toBe(defaultProps.image);
        expect(document.querySelector('meta[name="twitter:image"]').content)
          .toBe(defaultProps.image);
        expect(document.querySelector('meta[property="og:image"]').content)
          .toBe(defaultProps.image);
      });

      it('should match given prop', () => {
        const image = 'http://localhost/myimage.png';
        render(<MetaComponent image={image} />);
        expect(document.querySelector('meta[itemprop="image"]').content)
          .toBe(image);
        expect(document.querySelector('meta[name="twitter:image"]').content)
          .toBe(image);
        expect(document.querySelector('meta[property="og:image"]').content)
          .toBe(image);
      });
    });
  });
});
