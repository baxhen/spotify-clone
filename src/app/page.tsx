"use client";

import React from "react";
import Head from "next/head";
import { Header } from "@spotify/app/components/Header";
import { Sidebar } from "@spotify/app/components/Sidebar";
import { MainContent } from "@spotify/app/containers/MainContent";
import { Footer } from "@spotify/app/components/Footer";
import { useSearchShortcut } from "@spotify/app/hooks/useSearchShortcut";

export default function Home() {
  useSearchShortcut();

  return (
    <>
      <Head>
        <title>Spotify Web Player</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <MainContent />
        </div>
        <Footer />
      </div>
    </>
  );
}
