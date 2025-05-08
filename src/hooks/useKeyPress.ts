import React from "react";

interface UseKeyPressProps {
  callback: (event: KeyboardEvent) => void;
}

export const useKeyPress = ({ callback }: UseKeyPressProps) => {
  const handleKeyPress = React.useCallback((event: KeyboardEvent) => {
    callback(event);
  }, []);

  React.useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);
};
