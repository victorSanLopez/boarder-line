export type headerInfoProps = {
  title: string;
  subtitle: string;
  description: string;
};
export type boardGameListType = {
  averageRating: number;
  bggRating: number;
  forTrade: boolean;
  gameId: number;
  image: string;
  isExpansion: boolean;
  maxPlayers: number;
  minPlayers: number;
  name: string;
  numPlays: number;
  owned: boolean;
  playingTime: number;
  preOrdered: boolean;
  previousOwned: boolean;
  rank: number;
  rating: number;
  thumbnail: string;
  userComment: string;
  want: boolean;
  wantToBuy: boolean;
  wantToPlay: boolean;
  wishList: boolean;
  yearPublished: number;
};
export type cardProps = {
  name: string;
  image: string;
  rating: number;
};
