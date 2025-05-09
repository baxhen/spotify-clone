import { Instagram, Twitter, Facebook } from "lucide-react";
import { SongCard } from "@spotify/components/SongCard";

import "./styles.css";

// Music data
const topSongs = [
  {
    id: 1,
    title: "BAILE INolVIDABLE",
    artist: "Bad Bunny",
    image: "https://picsum.photos/id/237/300/300",
    explicit: true,
  },
  {
    id: 2,
    title: "Álcool & Prazer",
    artist: "Deejay Telio, Wet Bed Gang",
    image: "https://picsum.photos/id/238/300/300",
  },
  {
    id: 3,
    title: "Sports car",
    artist: "Tate McRae",
    image: "https://picsum.photos/id/239/300/300",
  },
  {
    id: 4,
    title: "Ordinary",
    artist: "Alex Warren",
    image: "https://picsum.photos/id/240/300/300",
  },
  {
    id: 5,
    title: "LA CANCIÓN",
    artist: "J Balvin, Bad Bunny",
    image: "https://picsum.photos/id/241/300/300",
  },
  {
    id: 6,
    title: "Pôr do Sol",
    artist: "Vizinhos",
    image: "https://picsum.photos/id/242/300/300",
  },
  {
    id: 7,
    title: "Vou continuar",
    artist: "Bispo, Gama WNTD",
    image: "https://picsum.photos/id/243/300/300",
  },
  {
    id: 8,
    title: "NÃO ERA LOVE",
    artist: "Luan Pereira, MC Tuto, Grelo",
    image: "https://picsum.photos/id/244/300/300",
  },
  {
    id: 9,
    title: "Hoje Tem, Hoje Tem",
    artist: "Nego Trufa, Oruam, Marquinho no Beat",
    image: "https://picsum.photos/id/265/300/300",
    explicit: true,
  },
  {
    id: 10,
    title: "Ta Rico Os Menino Do Gueto 💚",
    artist: "Mc IG, MC Ryan SP, Mc Negão Original, DJ...",
    image: "https://picsum.photos/id/268/300/300",
    explicit: true,
  },
  {
    id: 11,
    title: "Qué Pasaría...",
    artist: "Rauw Alejandro, Bad Bunny",
    image: "https://picsum.photos/id/247/300/300",
    explicit: true,
  },
  {
    id: 12,
    title: "Abracadabra",
    artist: "Lady Gaga",
    image: "https://picsum.photos/id/248/300/300",
  },
  {
    id: 13,
    title: "Deixa Eu Mandar Meu Passinho",
    artist: "DJ Aguilar, Dj Tchouzen, MC Marlon PH",
    image: "https://picsum.photos/id/249/300/300",
    explicit: true,
  },
  {
    id: 14,
    title: "Tentar (outra vez)",
    artist: "Catarina Filipe, LEO2745",
    image: "https://picsum.photos/id/250/300/300",
    explicit: true,
  },
  {
    id: 15,
    title: "Apenas um sonho",
    artist: "Luan Pereira, MC Tuto, Grelo",
    image: "https://picsum.photos/id/251/300/300",
  },
  {
    id: 16,
    title: "back to friends",
    artist: "sombr",
    image: "https://picsum.photos/id/252/300/300",
  },
  {
    id: 17,
    title: "OUTRA",
    artist: "tarisiix",
    image: "https://picsum.photos/id/253/300/300",
  },
  {
    id: 18,
    title: "VIDIGAL",
    artist: "WIU",
    image: "https://picsum.photos/id/254/300/300",
  },
  {
    id: 19,
    title: "E Agora",
    artist: "Nininho Vaz Maia",
    image: "https://picsum.photos/id/255/300/300",
  },
  {
    id: 20,
    title: "10:35",
    artist: "Tiësto, Tate McRae",
    image: "https://picsum.photos/id/256/300/300",
  },
];

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
  return (
    <main className="main-view flex-1 pb-24 bg-[var(--background-base)] rounded-lg">
      <div className="content">
        {/* Featured Music */}
        <div className="text-white min-h-screen">
          <h1 className="text-3xl font-bold mb-8 mt-18 ml-7">
            Músicas em alta
          </h1>

          <div className="grid-view grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 mb-8 ml-3">
            {topSongs.map((song) => (
              <SongCard key={song.id} song={song} />
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
