import clsx from 'clsx';
import {LoaderCircle, ShieldAlert, SquareChevronRight} from 'lucide-react';
import {useEffect} from 'react';
import styles from 'src/components/app/app-header-input.module.scss';
import {useAudioState} from 'src/components/app/hooks/use-audio-state';
import {useInput} from 'src/hooks/use-input';

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

  const {isLoading: isAudioLoading} = useAudioState();

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

  return (
    <div className={styles.input}>
      <input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        disabled={isLoading}
        className={clsx(isLoading && styles.inputLoading)}
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
