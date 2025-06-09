import { useState } from "react";
import "./App.css";
import Cards from "./Cards";
import FilterAnime from "./FilterAnime";

function App() {
  const [resultSearchedTitle, setResultSearchedTitle] = useState("");

  const inputResult = (value: string) => {
    setResultSearchedTitle(value);
  };

  return (
    <>
      <div className="absolute h-60 w-full hidden md:block bg-[#2c2e42] md:z-0" />

      <header className="relative z-10 py-9 flex flex-col justify-center items-center gap-4">
        <h1 className="font-bold text-2xl text-center md:text-3xl">
          Anime Chart Summer 2025
        </h1>

        <FilterAnime
          inputResult={inputResult}
          resultSearchedTitle={resultSearchedTitle}
        />
      </header>
      <main className="flex justify-center">
        <section className="grid grid-cols-1 auto-rows-auto m-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Cards resultSearchedTitle={resultSearchedTitle} />
        </section>
      </main>
    </>
  );
}

export default App;
