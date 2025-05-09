import Link from "next/link";
import "./styles.css";
import { classes } from "@spotify/utils/classes";

interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  explicit?: boolean;
}

interface SongCardProps {
  song: Song;
}

export const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="song-card flex flex-col cursor-pointer hover:bg-[var(--background-highlight)] rounded-lg transition-colors p-3 min-h-[260px]">
      <div className="relative mb-2">
        <img
          src={song.image}
          alt={`Album cover for ${song.title} by ${song.artist}`}
          className="w-full aspect-square object-cover rounded-md h-[170px] w-[170px]"
        />
        <div className="play absolute opacity-0 transition-all duration-220 ease-in-out rounded-md right-2 bottom-0">
          <button
            data-testid="play-button"
            aria-label={`Tocar ${song.title} de ${song.artist}`}
            data-encore-id="buttonPrimary"
            data-is-icon-only="true"
            className="h-12 w-12 bg-[var(--background-button-base)] rounded-full flex items-center justify-center hover:scale-[1.04] transition-transform cursor-pointer active:bg-[var(--background-button-press)]"
          >
            <div className="h-6 w-6">
              <span aria-hidden="true" className="">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className=""
                  viewBox="0 0 24 24"
                >
                  <path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
                </svg>
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex items-start flex-col gap-1.5">
        <div className="flex-1">
          <h3 className="font-normal text-sm text-white hover:underline">
            {song.title}
          </h3>
        </div>

        <span className="w-full flex items-center justify-start">
          <p className="text-[0.85rem] text-[var(--text-subdued)] hover:underline font-normal">
            {song.explicit && (
              <span className="text-xs font-semibold inline-flex items-center justify-center bg-[var(--text-subdued)] text-black text-xs w-4 min-w-4 h-4 rounded mr-2">
                E
              </span>
            )}
            {song.artist}
          </p>
        </span>
      </div>
    </div>
  );
};
