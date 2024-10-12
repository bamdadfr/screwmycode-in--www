import {render} from '@testing-library/react';
import React from 'react';

import {FadeAnimation} from './fade.animation';

function Children() {
  return <span>testing children</span>;
}

describe('FadeAnimation', () => {
  describe('container', () => {
    it('should be in the document', () => {
      const {container} = render(
        <FadeAnimation>
          <Children />
        </FadeAnimation>,
      );
      expect(container).toBeInTheDocument();
    });

    it('should be visible', () => {
      const {container} = render(
        <FadeAnimation>
          <Children />
        </FadeAnimation>,
      );
      expect(container).toBeVisible();
    });

    it('should not be empty', () => {
      const {container} = render(
        <FadeAnimation>
          <Children />
        </FadeAnimation>,
      );
      expect(container).not.toBeEmptyDOMElement();
    });
  });

  describe('props', () => {
    describe('delay', () => {
      it('should render if missing', () => {
        const {container} = render(
          <FadeAnimation>
            <Children />
          </FadeAnimation>,
        );
        expect(container).toBeDefined();
      });

      it('should render if 2000', () => {
        const {container} = render(
          <FadeAnimation delay={2000}>
            <Children />
          </FadeAnimation>,
        );
        expect(container).toBeDefined();
      });
    });
  });
});
