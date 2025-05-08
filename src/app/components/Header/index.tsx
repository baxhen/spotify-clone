import { Logo } from "@spotify/app/components/Logo";
import { IconButton } from "@spotify/app/components/IconButton";
import { SearchInput } from "../SearchInput";

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-2 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo />

          <div className="flex items-center max-w-[546px] w-full">
            <IconButton label="" classNames="ml-3">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                className="icon baseline"
                viewBox="0 0 24 24"
              >
                <path d="M12.5 3.247a1 1 0 0 0-1 0L4 7.577V20h4.5v-6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6H20V7.577l-7.5-4.33zm-2-1.732a3 3 0 0 1 3 0l7.5 4.33a2 2 0 0 1 1 1.732V21a1 1 0 0 1-1 1h-6.5a1 1 0 0 1-1-1v-6h-3v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.577a2 2 0 0 1 1-1.732l7.5-4.33z"></path>
              </svg>
            </IconButton>

            <SearchInput
              placeholder="O que você quer ouvir?"
              classNames="flex-1 ml-2 w-[474px]"
            />
          </div>
        </div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline">
            Premium
          </a>
          <a href="#" className="hover:underline">
            Support
          </a>
          <a href="#" className="hover:underline">
            Download
          </a>
        </nav>
      </div>
    </header>
  );
};
