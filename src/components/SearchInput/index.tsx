import { classes } from "@spotify/utils/classes";
import { IconButton } from "@spotify/components/IconButton";
import { Search } from "lucide-react";

import "./styles.css";

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  classNames?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  classNames,
  ...inputProps
}) => {
  return (
    <div className={classes("search-input h-11", classNames)}>
      <div className="relative h-full relative">
        <Search className="search-icon absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6 cursor-pointer transition-color duration-220 ease-in-out" />
        <input
          type="text"
          {...inputProps}
          className="w-full bg-[#242424] h-full text-white rounded-full py-2 pl-12 pr-4 focus:outline-none"
        />
        <div className="flex pl-3 absolute left-7 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <span className="invisible">{inputProps.placeholder}</span>
          <span className="flex gap-1 pl-3 kbd-group transition-opacity duration-220 ease-in-out">
            <kbd className="shortcut rounded-sm px-2">Ctrl</kbd>
            <kbd className="shortcut rounded-sm px-2">K</kbd>
          </span>
        </div>

        <div className="flex pl-3 pr-4 absolute right-0 top-1/2 transform -translate-y-1/2 border-l border-[#7c7c7c]">
          <button
            className={
              "icon-button text-white transition cursor-pointer hover:scale-[1.04] h-6 w-6"
            }
          >
            <span
              aria-hidden="true"
              className="flex items-center justify-center h-6 w-6"
            >
              <svg role="img" aria-hidden="true" viewBox="0 0 24 24">
                <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
                <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
