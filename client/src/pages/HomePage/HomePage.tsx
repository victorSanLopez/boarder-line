import { useState } from "react";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import style from "./HomePage.module.css";

export default function HomePage() {
  const [filter, setFilter] = useState("1");

  return (
    <section className={style.backgroundPage}>
      <FilterPanel filter={filter} setFilter={setFilter} />
    </section>
  );
}
