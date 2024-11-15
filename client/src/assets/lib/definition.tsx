export type headerInfoProps = {
  title: string;
  subtitle: string;
  description: string;
};
export type filterPanelProps = {
  filterGame: string;
  setFilterGame: (f: string) => void;
};
export type boardGameListType = {
  averageRating: number;
  gameId: number;
  image: string;
  isExpansion: boolean;
  maxPlayers: number;
  minPlayers: number;
  name: string;
  playingTime: number;
  yearPublished: number;
};
export type cardProps = {
  name: string;
  image: string;
  averageRating: number;
};
