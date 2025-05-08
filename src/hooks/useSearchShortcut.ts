import { useKeyPress } from "@spotify/hooks/useKeyPress";

export const useSearchShortcut = () => {
  return useKeyPress({
    callback: (event) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        const searchInput = document.querySelector(
          "input[type='text']"
        ) as HTMLInputElement;
        if (searchInput) {
          searchInput.focus();
        }
      }
    },
  });
};
