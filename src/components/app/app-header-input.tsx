import {useFuzzySearchList} from '@nozbe/microfuzz/react';
import clsx from 'clsx';
import {useAtomValue} from 'jotai';
import {LoaderCircle, ShieldAlert, SquareChevronRight} from 'lucide-react';
import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styles from 'src/components/app/app-header-input.module.scss';
import {audioIsLoadingAtom} from 'src/components/app/hooks/audio-atoms';
import {useInput} from 'src/hooks/use-input';
import {useMedias} from 'src/hooks/use-medias';

export const AppHeaderInput = () => {
  const {
    ref: inputRef,
    handleKeyDown,
    handleSubmit,
    isError,
    isLoading: isInputLoading,
    needsRedirect,
    redirect,
  } = useInput();

  const {medias} = useMedias();
  const isAudioLoading = useAtomValue(audioIsLoadingAtom);
  const isLoading = isInputLoading || isAudioLoading;

  const Icon = () => {
    if (isError) {
      return <ShieldAlert className={styles.inputButtonIconError} />;
    } else if (isLoading) {
      return <LoaderCircle className={styles.inputButtonIconLoading} />;
    } else {
      return <SquareChevronRight />;
    }
  };

  useEffect(() => {
    if (!needsRedirect || isLoading) {
      return;
    }

    redirect();
  }, [needsRedirect, redirect, isLoading]);

  // --------------------
  // - fuzzy experiment -
  // --------------------
  const titles = useMemo(() => medias.map((m) => m.title), [medias]);
  const [queryValue, setQueryValue] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setQueryValue(value);
  }, []);

  const filteredTitles = useFuzzySearchList({
    list: titles,
    queryText: queryValue,
    mapResultItem: ({item}) => item,
  });

  // --------------------
  // - fuzzy experiment -
  // --------------------

  return (
    <div className={styles.input}>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className={clsx(isLoading && styles.inputLoading)}
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={isError || isLoading}
        className={clsx(
          !isError && !isLoading && styles.inputButton,
          isError && styles.inputButtonDisabled,
          isLoading && styles.inputButtonLoading,
        )}
      >
        <Icon />
      </button>
    </div>
  );
};
