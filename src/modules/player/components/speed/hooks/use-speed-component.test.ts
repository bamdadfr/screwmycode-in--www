import {act, renderHook} from '@testing-library/react-hooks';
import {ChangeEvent} from 'react';
import {useSpeedComponent} from './use-speed-component';

describe('useSpeedComponent', () => {
  describe('value', () => {
    it('should default to state.speed which is 1', () => {
      const {result} = renderHook(() => useSpeedComponent());
      expect(result.current.value).toBe(1);
    });

    it('should change when .onChange() is fired', () => {
      // given
      const {result} = renderHook(() => useSpeedComponent());

      // when
      const event = {'target': {'value': 1.23}};
      act(() => result.current.onChange(event as unknown as ChangeEvent<HTMLInputElement>));

      // then
      expect(result.current.value).toBe(event.target.value);
    });
  });

  describe('onChange', () => {
    it('should be a function', () => {
      const {result} = renderHook(() => useSpeedComponent());
      expect(typeof result.current.onChange).toBe('function');
    });
  });
});
