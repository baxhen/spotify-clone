import {
  SkipBack,
  SkipForward,
  Pause,
  Play,
  Maximize2,
  Cast,
  Mic2,
  List,
  Layers,
  Volume2,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

import { Song } from "@spotify/lib/features/now-playing/playNowSlice";

import "./styles.css";

interface NowPlayingBarProps {
  currentTime: string;
  totalTime: string;
  progress: number; // percentage of the song that has played
  song: Song | null;
  playing: boolean;
  onPlay: () => void;
  onPause: () => void;
}

export const NowPlayingBar: React.FC<NowPlayingBarProps> = ({
  currentTime,
  totalTime,
  progress,
  song,
  onPause,
  onPlay,
  playing,
}) => {
  if (!song) {
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
  }

  return (
    <div className="now-playing-bar flex flex-col w-full bg-black text-white">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Album art and song info */}
        <div className="flex items-center space-x-3 w-[30%] min-w-[180px]">
          <div className="relative">
            <Image
              width={180}
              height={180}
              src={song.image}
              alt="Album cover for Oh Lord, You're Beautiful by Keith Green"
              className="w-12 h-12 rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold">{song.title}</h3>
            <p className="text-xs text-gray-400">{song.artist}</p>
          </div>
          <div className="ml-2">
            <CheckCircle2 size={18} className="text-green-500" />
          </div>
        </div>

        {/* Center controls */}
        <div className="flex flex-col items-center max-w-[722px] w-[40%]">
          <div className="flex items-center space-x-6">
            <button className="text-gray-400 hover:text-white">
              <SkipBack size={20} />
            </button>
            <button
              className={`bg-white rounded-full p-1.5 text-black hover:bg-gray-200 hover:scale-[1.04] transition-transform cursor-pointer ${
                playing ? "hidden" : ""
              }`}
              onClick={onPlay}
            >
              <Pause size={20} />
            </button>
            <button
              className={`bg-white rounded-full p-1.5 text-black hover:bg-gray-200 hover:scale-[1.04] transition-transform cursor-pointer ${
                playing ? "" : "hidden"
              }`}
              onClick={onPause}
            >
              <Play size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Cast size={18} />
            </button>
          </div>

          {/* Progress bar */}
          <div className="flex items-center w-full mt-1 space-x-2">
            <span className="text-xs text-gray-400">{currentTime}</span>
            <div className="relative w-full h-1 bg-gray-700 rounded-full">
              <div
                className="absolute h-1 bg-white rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-400">{totalTime}</span>
          </div>
        </div>

        {/* Right controls */}
        <div className="flex items-center space-x-4 w-[30%] min-w-[180px]">
          <button className="text-gray-400 hover:text-white ml-auto">
            <Mic2 size={18} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <List size={18} />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Layers size={18} />
          </button>
          <div className="flex items-center space-x-2">
            <Volume2 size={18} className="text-gray-400" />
            <div className="w-24 h-1 bg-gray-700 rounded-full">
              <div className="h-1 bg-white rounded-full w-3/4"></div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <Maximize2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};
