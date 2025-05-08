import "./styles.css";

export const NowPlayingBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-700 to-purple-700 py-3 px-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-sm">Testar o Premium de graça</h3>
        <p className="text-xs">
          Inscreva-se para curtir música ilimitada e podcasts só com alguns
          anúncios. Não precisa de cartão de crédito.
        </p>
      </div>
      <button className="bg-white text-black font-bold py-2 px-6 rounded-full hover:scale-105 transition-transform">
        Inscrever-se grátis
      </button>
    </div>
  );
};
