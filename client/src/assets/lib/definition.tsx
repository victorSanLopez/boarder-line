export type headerInfoProps = {
  title: string;
  subtitle: string;
  description: string;
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
  type: string;
};
export type cardProps = {
  name: string;
  image: string;
  averageRating: number;
};

export type expansionType = {
  gameId: number;
  name: string;
};

export type gameDetailsType = {
  gameId: number;
  name: string;
  type?: string[];
  image?: string;
  minPlayers?: number;
  maxPlayers?: number;
  playingTime?: number;
  publishers?: string[];
  designers?: string[];
  averageRating?: number;
  description?: string;
  artists?: string[];
  expansions?: expansionType[];
};

export type commentProps = {
  id: number;
  firstname: string;
  lastname: string;
  comment: string;
};
