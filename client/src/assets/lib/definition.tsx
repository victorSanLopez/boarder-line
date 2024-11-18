export type headerInfoProps = {
  title: string;
  subtitle: string;
  description: string;
};

export type cardProps = {
  name: string;
  image: string;
  rating: number;
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
  expansions?: [];
};
