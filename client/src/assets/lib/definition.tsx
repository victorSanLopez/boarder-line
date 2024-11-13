export type headerInfoProps = {
  title: string;
  subtitle: string;
  description: string;
};
export type filterPanelProps = {
  filterGame: string;
  setFilterGame: (f: string) => void;
};
export type dataGames = {
  minPlayers: number;
  rating: number;
  playingTime: number;
};
