"use client";

import React from "react";
import Head from "next/head";
import { Header } from "@spotify/components/Header";
import { Sidebar } from "@spotify/components/Sidebar";
import { MainView } from "@spotify/components/MainView";
import { NowPlayingBar } from "@spotify/components/NowPlayingBar";
import { useSearchShortcut } from "@spotify/hooks/useSearchShortcut";
import {
  pauseSong,
  playSong,
  selectCurrentSong,
  selectIsPlaying,
} from "@spotify/lib/features/now-playing/playNowSlice";
import { useAppDispatch, useAppSelector } from "@spotify/hooks/redux";

export default function Home() {
  const [currentTime, setCurrentTime] = React.useState("0:03");
  const [totalTime, setTotalTime] = React.useState("4:16");
  const [progress, setProgress] = React.useState(1);

  const song = useAppSelector(selectCurrentSong);
  const isPlaying = useAppSelector(selectIsPlaying);
  const dispatch = useAppDispatch();

  const handlePlay = () => {
    dispatch(playSong());
  };
  const handlePause = () => {
    dispatch(pauseSong());
  };

  useSearchShortcut();
  return (
    <>
      <Head>
        <title>Spotify Web Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="main-container">
        <Header />
        <Sidebar />
        <MainView />
        <NowPlayingBar
          song={song}
          currentTime={currentTime}
          totalTime={totalTime}
          progress={progress}
          onPlay={handlePlay}
          onPause={handlePause}
          playing={isPlaying}
        />
      </div>
    </>
  );
}
