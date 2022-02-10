import React from 'react';
import {render as defaultRender, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {FormComponent} from './form.component';
import {MOCK_STATE} from './form.component.test.mock';
import {ThemeWrapper} from '../../app/components/theme-wrapper/theme-wrapper';

const render = () => {
  const {link, handleSubmit} = MOCK_STATE();

  const {container} = defaultRender(
    <ThemeWrapper>
      <FormComponent />
    </ThemeWrapper>,
  );

  return {
    container,
    input: screen.getByRole('textbox'),
    submit: screen.getByRole('button'),
    state: {link, handleSubmit},
  };
};

afterEach(() => jest.resetAllMocks());

describe('FormComponent', () => {
  describe('container', () => {
    it('should be in the document, visible and not empty', () => {
      const {container} = render();
      expect(container).toBeInTheDocument();
      expect(container).toBeVisible();
      expect(container).not.toBeEmptyDOMElement();
    });
  });

  describe('input', () => {
    it('should be an instance of HTMLInputElement', () => {
      const {input} = render();
      expect(input instanceof HTMLInputElement).toBe(true);
    });

    it('should default to an empty string', () => {
      const {input} = render();
      expect(input).toHaveValue('');
    });
  });

  describe('submit', () => {
    it('should be an instance of HTMLButtonElement', () => {
      const {submit} = render();
      expect(submit instanceof HTMLButtonElement).toBe(true);
    });
  });

  describe('state', () => {
    describe('link', () => {
      describe('ref', () => {
        it('should default to null', () => {
          const {state} = render();
          expect(state.link.ref).toBe(null);
        });
      });

      describe('value', () => {
        it('should default to an empty string', () => {
          const {state} = render();
          expect(state.link.value).toBe('');
        });
      });

      describe('onChange', () => {
        it('should be called when user type in input', () => {
          // given
          const {input, state} = render();
          const string = 'this is my testing string';
          expect(state.link.onChange).toHaveBeenCalledTimes(0);

          // when
          userEvent.type(input, string);

          // then
          expect(state.link.onChange).toHaveBeenCalledTimes(string.length);
        });
      });
    });

    describe('handleSubmit', () => {
      it('should be a function', () => {
        const {state} = render();
        expect(typeof state.handleSubmit).toBe('function');
      });

      it('should be called when user click submit', () => {
        // given
        const {state, submit} = render();
        expect(state.handleSubmit).toHaveBeenCalledTimes(0);

        // when
        userEvent.click(submit);

        // then
        expect(state.handleSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
