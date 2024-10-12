import {renderHook} from '@testing-library/react-hooks';

import {useApp} from './use-app';

describe('useApp', () => {
  it('should be defined', () => {
    const hook = renderHook(() => useApp());
    expect(hook).toBeDefined();
  });
});
