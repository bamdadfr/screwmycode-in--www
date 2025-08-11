import {useFuzzySearchList} from '@nozbe/microfuzz/react';
import clsx from 'clsx';
import {useSetAtom} from 'jotai';
import {LoaderCircle, ShieldAlert, SquareChevronRight} from 'lucide-react';
import {
  type ChangeEvent,
  type MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styles from 'src/components/app/app-header-input.module.scss';
import {useAppLoading} from 'src/hooks/use-app-loading';
import {useCurrentMedia} from 'src/hooks/use-current-media';
import {isActiveAtom, useInput} from 'src/hooks/use-input';
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

  const setIsActive = useSetAtom(isActiveAtom);

  const {medias} = useMedias();
  const isAppLoading = useAppLoading();
  const isLoading = isInputLoading || isAppLoading;

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
  const {update} = useCurrentMedia();
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

  const handleFuzzyClick = useCallback(
    (e: MouseEvent<HTMLSpanElement>) => {
      e.preventDefault();

      if (inputRef.current === null) {
        return;
      }

      setQueryValue('');

      const title = e.currentTarget.textContent;
      const media = medias.find((m) => m.title === title);

      if (!media) {
        return;
      }

      update(media).then();
      inputRef.current.value = '';
    },
    [medias, update, inputRef],
  );

  // --------------------
  // - fuzzy experiment -
  // --------------------

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          ref={inputRef}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          className={clsx(isLoading && styles.inputLoading)}
          onChange={handleChange}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
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

      <div className={styles.fuzzyContainer}>
        {queryValue !== '' &&
          filteredTitles.map((title) => {
            return (
              <span
                className={styles.fuzzyElement}
                onClick={handleFuzzyClick}
                key={title}
              >
                {title}
              </span>
            );
          })}
      </div>
    </div>
  );
};
