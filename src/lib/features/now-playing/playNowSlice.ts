import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "@spotify/hooks/redux";
import type { RootState } from "@spotify/lib/store";

export interface Song {
  id: number;
  title: string;
  artist: string;
  image: string;
  explicit?: boolean;
}

// Define a type for the slice state
interface NowPlayingState {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
}

// Define the initial state using that type
const initialState: NowPlayingState = {
  songs: [
    {
      id: 1,
      title: "Oh Lord, You're Beautiful",
      artist: "Keith Green",
      image: "https://i.scdn.co/image/ab67616d0000aa548801b973987c1fd59db9fe17",
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
  ],
  currentSong: null,
  isPlaying: false,
};

export const counterSlice = createSlice({
  name: "playNow",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePlayNowSong: (state, action: PayloadAction<number>) => {
      state.currentSong =
        state.songs.find((song) => song.id === action.payload) || null;
    },
    playSong: (state) => {
      state.isPlaying = true;
    },
    pauseSong: (state) => {
      state.isPlaying = false;
    },
  },
});

export const { changePlayNowSong, pauseSong, playSong } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export const selectSongs = (state: RootState) => state.playNowReducer.songs;

export const selectCurrentSong = (state: RootState) =>
  state.playNowReducer.currentSong;

export const selectIsPlaying = (state: RootState) =>
  state.playNowReducer.isPlaying;

export default counterSlice.reducer;
