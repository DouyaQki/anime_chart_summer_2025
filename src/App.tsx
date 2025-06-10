import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./Cards";
import FilterAnime from "./FilterAnime";

function App() {
  const [resultSearchedTitle, setResultSearchedTitle] = useState("");

  const inputResult = (value: string) => {
    setResultSearchedTitle(value);
  };

  // --------------- SCROLL -------------------
  const SCROLL_TYLES = " w-10 fixed bottom-5 right-8 z-40 ";
  const SCROLL_VISIBLE = " block ";
  const SCROLL_HIDDEN = " hidden ";
  const [scrollBtnHidden, setScrollBtnHidden] = useState(SCROLL_HIDDEN);

  useEffect(() => {
    const scrollEvent = () => {
      const SCROLL_Y = Math.floor(window.scrollY);

      if (SCROLL_Y > 3000) {
        setScrollBtnHidden(SCROLL_VISIBLE);
        return;
      }

      setScrollBtnHidden(SCROLL_HIDDEN);
    };
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, []);

  return (
    <div>
      <div className="absolute h-60 w-full hidden md:block bg-[#2c2e42] md:z-0" />

      <header
        id="header"
        className="relative z-10 py-9 flex flex-col justify-center items-center gap-4"
      >
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

      <a href="#header" className={SCROLL_TYLES + scrollBtnHidden}>
        <svg
          className="bg-[#2c2e42] rounded-full "
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#e3e3e3"
        >
          <path d="M452-244v-400L282-477l-42-43 241-241 241 241-42 42-168-168v402h-60Z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
