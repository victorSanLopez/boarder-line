import CardGame from "../../components/cardGame/CardGame";
import style from "./homePage.module.css";

const cardList = [
  {
    name: "10 Days in Africa",
    image:
      "https://cf.geekdo-images.com/B1Bji6N6r1kUvI_Glp7U1w__original/img/3Y_svR8FUmL-yicbCq3bwBvSYKc=/0x0/filters:format(jpeg)/pic1229634.jpg",
    rating: -1.0,
    want: false,
    yearPublished: 2023,
  },
  {
    gameId: 5867,
    name: "10 Days in Europe",
    image:
      "https://cf.geekdo-images.com/7jXx06W2pr66YKWrZ7Dywg__original/img/ylUIeQ-GifItuTGgLWGWhyA1cus=/0x0/filters:format(png)/pic4895073.png",
    thumbnail:
      "https://cf.geekdo-images.com/7jXx06W2pr66YKWrZ7Dywg__thumb/img/eKUhAbBWedJv_RIsUA47BpQSTQw=/fit-in/200x150/filters:strip_icc()/pic4895073.png",
    minPlayers: 2,
    maxPlayers: 4,
    playingTime: 30,
    isExpansion: false,
    yearPublished: 2002,
    bggRating: 0.0,
    averageRating: 6.60492,
    rank: 2739,
    numPlays: 2,
    rating: 7.0,
    owned: true,
    preOrdered: false,
    forTrade: false,
    previousOwned: false,
    want: false,
    wantToPlay: false,
    wantToBuy: false,
    wishList: false,
    userComment: "",
  },
];

export default function HomePage() {
  return (
    <section className={style.backgroundPage}>
      <CardGame card={cardList[0]} />
      <CardGame card={cardList[1]} />
    </section>
  );
}
