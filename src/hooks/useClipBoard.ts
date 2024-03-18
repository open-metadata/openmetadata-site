import {useCallback, useEffect, useState} from "react";

/**
 * React hook to copy text to clipboard
 * @param value the text to copy
 * @param timeout delay (in ms) to switch back to initial state once copied.
 * @param callBack execute when content is copied to clipboard
 */
export const useClipboard = (
  value: string,
  timeout = 1500,
  callBack?: () => void
) => {
  // local state
  const [hasCopied, setHasCopied] = useState(false);
  const [valueState, setValueState] = useState(value);

  // handlers
  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(valueState);
      setHasCopied(true);
      callBack && callBack();
    } catch (error) {
      setHasCopied(false);
    }
  }, [valueState]);

  // side effects
  useEffect(() => setValueState(value), [value]);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (hasCopied) {
      timeoutId = Number(
        setTimeout(() => {
          setHasCopied(false);
        }, timeout)
      );
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeout, hasCopied]);

  return {
    onCopyToClipBoard: handleCopy,
    hasCopied,
  };
};
