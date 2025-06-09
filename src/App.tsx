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
      <FilterAnime
        inputResult={inputResult}
        resultSearchedTitle={resultSearchedTitle}
      />
      <main className="grid grid-cols-1 auto-rows-auto m-2 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Cards resultSearchedTitle={resultSearchedTitle} />
      </main>
    </>
  );
}

export default App;
