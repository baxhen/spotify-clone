"use client";

import React from "react";
import Head from "next/head";
import { Header } from "@spotify/components/Header";
import { Sidebar } from "@spotify/components/Sidebar";
import { MainView } from "@spotify/components/MainView";
import { NowPlayingBar } from "@spotify/components/NowPlayingBar";
import { useSearchShortcut } from "@spotify/hooks/useSearchShortcut";

export default function Home() {
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
        <NowPlayingBar />
      </div>
    </>
  );
}
