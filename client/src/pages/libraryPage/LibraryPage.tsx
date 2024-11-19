import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import type { boardGameListType } from "../../assets/lib/definition";
import CardGame from "../../components/cardGame/CardGame";
import FilterType from "../../components/filterType/FilterType";
import style from "./libraryPage.module.css";

// page library pour lister les jeux et les filtrer

export default function libraryPage() {
  const fullGame: boardGameListType[] = useLoaderData() as boardGameListType[];
  const [filterType, setFilterType] = useState("");
  const categories: string[] = [...new Set(fullGame.map((f) => f.type))]
    .join(",")
    .split(",")
    .splice(1);
  const onlyOneCategories: string[] = [...new Set(categories.map((s) => s))];

  return (
    <section className={style.backgroundPage}>
      <div>
        <FilterType
          setFilterType={setFilterType}
          category={onlyOneCategories}
        />
      </div>
      <div className={style.cards}>
        {filterType !== ""
          ? fullGame
              .filter((f) => f.type?.includes(filterType))
              .map((f) => <CardGame key={f.gameId} card={f} />)
          : fullGame.map((f) => <CardGame key={f.gameId} card={f} />)}
      </div>
    </section>
  );
}
