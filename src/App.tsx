import { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import FilterAnime from "./FilterAnime";

type T_chart = {
  season_2025: {
    id: number;
    title: string;
    description: string;
    genre: string[];
    studio: string;
    img: string;
  }[];
};

function App() {
  const [shows, setShows] = useState<T_chart[] | []>([]);

  return (
    <>
      <FilterAnime />
      <main className="grid grid-cols-1 grid-rows-60 m-2 gap-4">
        <Cards />
      </main>
    </>
  );
}

export default App;
