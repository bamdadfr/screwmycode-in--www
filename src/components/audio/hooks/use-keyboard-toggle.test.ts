import {renderHook} from '@testing-library/react-hooks';

import {useKeyboardToggle} from './use-keyboard-toggle';
import {MOCK_DOCUMENT} from './use-keyboard-toggle.mock';

afterEach(() => jest.resetAllMocks());

describe('useKeyboardToggle', () => {
  describe('keypress event listener', () => {
    it('should be added on mount', () => {
      // given
      expect(MOCK_DOCUMENT.addEventListener).toHaveBeenCalledTimes(0);

      // when
      renderHook(() => useKeyboardToggle());

      // then
      expect(MOCK_DOCUMENT.addEventListener).toHaveBeenCalled();
    });

    it('should be removed on unmount', () => {
      // given
      const {unmount} = renderHook(() => useKeyboardToggle());
      expect(MOCK_DOCUMENT.removeEventListener).toHaveBeenCalledTimes(0);

      // when
      unmount();

      // then
      expect(MOCK_DOCUMENT.removeEventListener).toHaveBeenCalledTimes(1);
    });
  });
});
