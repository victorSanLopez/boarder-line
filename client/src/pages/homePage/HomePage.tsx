import CardGame from "../../components/cardGame/CardGame";
import style from "./homePage.module.css";

const cardList = [
  {
    name: "10 Days in Africa",
    image:
      "https://cf.geekdo-images.com/B1Bji6N6r1kUvI_Glp7U1w__original/img/3Y_svR8FUmL-yicbCq3bwBvSYKc=/0x0/filters:format(jpeg)/pic1229634.jpg",
    rating: 0,
    want: false,
    yearPublished: 2023,
  },
];

export default function HomePage() {
  return (
    <section className={style.backgroundPage}>
      <CardGame card={cardList[0]} />
    </section>
  );
}
