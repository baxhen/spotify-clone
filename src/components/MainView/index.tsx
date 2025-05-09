import "./styles.css";
import { Instagram, Twitter, Facebook } from "lucide-react";
import { SongCard } from "@spotify/components/SongCard";

import { useAppDispatch, useAppSelector } from "@spotify/hooks/redux";
import {
  changePlayNowSong,
  selectSongs,
  Song,
} from "@spotify/lib/features/now-playing/playNowSlice";

// Music data
const topSongs = [];

const footerLinks = {
  empresa: ["Sobre", "Empregos", "For the Record"],
  comunidades: [
    "Para Artistas",
    "Desenvolvedores",
    "Publicidade",
    "Investidores",
    "Fornecedores",
  ],
  linksUteis: ["Suporte", "Aplicativo móvel grátis"],
  planos: [
    "Premium Individual",
    "Premium Duo",
    "Premium Família",
    "Premium Universitário",
    "Spotify Free",
  ],
};

export const MainView: React.FC = () => {
  const songs = useAppSelector(selectSongs);
  const dispatch = useAppDispatch();

  const handleOnPlay = (song: Song) => {
    dispatch(changePlayNowSong(song.id));
  };

  return (
    <main className="main-view flex-1 pb-24 bg-[var(--background-base)] rounded-lg">
      <div className="content">
        {/* Featured Music */}
        <div className="text-white min-h-screen">
          <h1 className="text-3xl font-bold mb-8 mt-18 ml-7">
            Músicas em alta
          </h1>

          <div className="grid-view grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-8 ml-3">
            {songs.map((song) => (
              <SongCard key={song.id} song={song} onPlay={handleOnPlay} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="px-6 pt-12 pb-8 border-t border-gray-800 mt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2">
                {footerLinks.empresa.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Comunidades</h3>
              <ul className="space-y-2">
                {footerLinks.comunidades.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Links úteis</h3>
              <ul className="space-y-2">
                {footerLinks.linksUteis.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Planos do Spotify</h3>
              <ul className="space-y-2">
                {footerLinks.planos.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center mt-12">
            <div className="text-xs text-gray-400">© 2023 Spotify AB</div>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-gray-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};
