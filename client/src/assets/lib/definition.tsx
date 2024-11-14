export type headerInfoProps = {
  title: string;
  subtitle: string;
  description: string;
};
export type filterPanelProps = {
  filterGame: string;
  setFilterGame: (f: string) => void;
};
export type dataGamesProps = {
  gameId: number;
  name: string;
  image: string;
  thumbnail: string;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;
  isExpansion: boolean;
  yearPublished: number;
  bggRating: number;
  averageRating: number;
  rank: number;
  numPlays: number;
  rating: number;
  owned: boolean;
  preOrdered: boolean;
  forTrade: boolean;
  previousOwned: boolean;
  want: boolean;
  wantToPlay: boolean;
  wantToBuy: boolean;
  wishList: boolean;
  userComment: string;
};
export type cardProps = {
  name: string;
  image: string;
  rating: number;
};
