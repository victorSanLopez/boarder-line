import style from "./HomePage.module.css";
import { useState } from "react";
import FilterPanel from "../../components/filterPanel/FilterPanel";

export default function HomePage() {
  const [filter, setFilter] = useState("1");

  return (
    <section className={style.backgroundPage}>
      <FilterPanel filter={filter} setFilter={setFilter} />
    </section>
  );
}
