import {renderHook} from '@testing-library/react-hooks';

import {MOCK_LINK, SPY_LINK} from './use-form-component.test.mock';
import {useInputRefocus} from './use-input-refocus';

describe('useInputRefocus', () => {
  describe('events', () => {
    it('should handle 1 event', () => {
      expect(SPY_LINK.addEventListener).toHaveBeenCalledTimes(0);
      expect(SPY_LINK.removeEventListener).toHaveBeenCalledTimes(0);

      const {unmount} = renderHook(() => useInputRefocus(MOCK_LINK.ref));
      expect(SPY_LINK.addEventListener).toHaveBeenCalledTimes(1);
      expect(SPY_LINK.removeEventListener).toHaveBeenCalledTimes(0);

      unmount();
      expect(SPY_LINK.addEventListener).toHaveBeenCalledTimes(1);
      expect(SPY_LINK.removeEventListener).toHaveBeenCalledTimes(1);
    });

    describe('blur', () => {
      it('should mount correctly', () => {
        renderHook(() => useInputRefocus(MOCK_LINK.ref));
        expect(SPY_LINK.addEventListener.mock.calls[0][0]).toBe('blur');
        expect(typeof SPY_LINK.addEventListener.mock.calls[0][1]).toBe('function');
      });

      it('should unmount correctly', () => {
        const {unmount} = renderHook(() => useInputRefocus(MOCK_LINK.ref));
        unmount();
        expect(SPY_LINK.removeEventListener.mock.calls[0][0]).toBe('blur');
        expect(typeof SPY_LINK.removeEventListener.mock.calls[0][1]).toBe('function');
      });
    });
  });
});
