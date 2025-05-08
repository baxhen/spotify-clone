import "./styles.css";

export const NowPlayingBar: React.FC = () => {
  return (
    <main className="now-playing-bar flex-1 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition"
          >
            <div className="h-40 bg-gray-600 rounded mb-4"></div>
            <h3 className="text-lg font-semibold">Playlist {index + 1}</h3>
            <p className="text-sm text-gray-300">Description goes here</p>
          </div>
        ))}
      </div>
    </main>
  );
};
