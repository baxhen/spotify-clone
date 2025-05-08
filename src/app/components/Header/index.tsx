import { Logo } from "@spotify/app/components/Logo";
import { IconButton } from "@spotify/app/components/IconButton";
import { SearchInput } from "../SearchInput";

import "./styles.css";

export const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-2 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Logo classNames="ml-5" />

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
        <nav className="gap-2 h-[48] justify-center items-center flex">
          <a
            href="#"
            className="hover:scale-[1.04] font-bold text-base text-[#b3b3b3] hover:text-white transition-colors duration-220 ease-in-out"
          >
            Premium
          </a>
          <a
            href="#"
            className="hover:scale-[1.04] font-bold text-base text-[#b3b3b3] hover:text-white transition-colors duration-220 ease-in-out"
          >
            Suporte
          </a>
          <a
            href="#"
            className="hover:scale-[1.04] font-bold text-base text-[#b3b3b3] hover:text-white transition-colors duration-220 ease-in-out"
          >
            Baixar
          </a>

          <div className="border-s h-[25] w-1 ml-4 mr-4"></div>

          <button
            role="button"
            className="link-button ml-2 font-bold text-sm transition-colors duration-220 ease-in-out h-8 flex items-center gap-2 cursor-pointer hover:scale-[1.04]"
          >
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4"
            >
              <path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path>
              <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path>
            </svg>{" "}
            Intalar aplicativo
          </button>
          <a
            href="#"
            className="hover:scale-[1.04] font-bold text-sm text-[#b3b3b3] hover:text-white transition-colors duration-220 ease-in-out ml-5"
          >
            Inscrever-se
          </a>
          <button
            role="button"
            className="ml-2 rounded-full font-bold bg-white text-black h-12 w-28 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.04] transition-colors duration-220 ease-in-out"
          >
            Entrar
          </button>
        </nav>
      </div>
    </header>
  );
};
