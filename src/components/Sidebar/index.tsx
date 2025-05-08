import { Plus, Globe } from "lucide-react";
import { SuggestionCard } from "@spotify/components/SuggestionCard";

import "./styles.css";

export const Sidebar: React.FC = () => {
  return (
    <div className="sidebar text-white flex flex-col rounded-lg">
      <div className="flex-1 max-w-lg">
        <header className="flex justify-between items-center mb-8 pt-3 pr-4 pl-4 pb-2">
          <h1 className="text-2xl font-bold text-base">Sua Biblioteca</h1>
          <button className="p-2 rounded-full hover:bg-[var(--background-highlight)] cursor-pointer">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="h-4 w-4 fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
            </svg>
          </button>
        </header>

        <div className="flex flex-col gap-4 ">
          <SuggestionCard
            title="Crie sua primeira playlist"
            description="É fácil, vamos te ajudar."
            buttonText="Criar playlist"
          />

          <SuggestionCard
            title="Que tal seguir um podcast novo?"
            description="Avisaremos você sobre novos episódios."
            buttonText="Explore podcasts"
          />
        </div>
      </div>

      <footer className="mt-auto p-4 text-sm text-gray-400">
        <div className="max-w-lg mx-auto">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <a href="#" className="cursor-pointer text-[0.6875rem]">
              Legal
            </a>
            <a href="#" className="cursor-pointer text-[0.6875rem]">
              Segurança e Centro de privacidade
            </a>
            <a href="#" className="cursor-pointer text-[0.6875rem]">
              Política de privacidade
            </a>
            <a href="#" className="cursor-pointer text-[0.6875rem]">
              Configurações de cookies
            </a>
            <a href="#" className="cursor-pointer text-[0.6875rem]">
              Sobre anúncios
            </a>
            <a href="#" className="cursor-pointer text-[0.6875rem]">
              Acessibilidade
            </a>
          </div>
          <button className="cursor-pointer hover:underline text-white text-[0.6875rem] font-bold mb-8">
            Cookies
          </button>

          <button className="flex items-center gap-2 border border-gray-700 rounded-full py-2 px-4 hover:border-white cursor-pointer hover:scale-[1.04] transition-transform duration-220 ease-in-out">
            <Globe className="w-5 h-5 text-white" />
            <span className="text-white font-bold">Português do Brasil</span>
          </button>
        </div>
      </footer>
    </div>
  );
};
