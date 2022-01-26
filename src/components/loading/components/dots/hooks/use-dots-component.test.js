import {act, renderHook} from '@testing-library/react-hooks';
import {useDotsComponent} from './use-dots-component';

beforeAll(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.clearAllTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('useDotsComponent', () => {
  it('should follow the dot sequence', () => {
    const sequence = ['', '.', '..', '...', ''];
    const {rerender, result} = renderHook(() => useDotsComponent());

    expect(result.current.dots).toBe(sequence[0]);

    act(() => {
      jest.advanceTimersByTime(500);
      rerender();
    });

    expect(result.current.dots).toBe(sequence[1]);

    act(() => {
      jest.advanceTimersByTime(500);
      rerender();
    });

    expect(result.current.dots).toBe(sequence[2]);

    act(() => {
      jest.advanceTimersByTime(500);
      rerender();
    });

    expect(result.current.dots).toBe(sequence[3]);

    act(() => {
      jest.advanceTimersByTime(500);
      rerender();
    });

    expect(result.current.dots).toBe(sequence[4]);
  });
});
