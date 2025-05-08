import { Home, Library, PlusSquare } from "lucide-react";

export const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 p-4 space-y-6">
      <div>
        <button className="flex items-center space-x-2">
          <Home className="w-5 h-5" />
          <span>Home</span>
        </button>
      </div>
      <div>
        <button className="flex items-center space-x-2">
          <Library className="w-5 h-5" />
          <span>Your Library</span>
        </button>
      </div>
      <div>
        <button className="flex items-center space-x-2">
          <PlusSquare className="w-5 h-5" />
          <span>Create Playlist</span>
        </button>
      </div>
    </aside>
  );
};
