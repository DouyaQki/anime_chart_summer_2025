import "./App.css";

type T_FindAnime = {
  inputResult: (input: string) => void;
  resultSearchedTitle: string;
};

function FilterAnime({ inputResult, resultSearchedTitle }: T_FindAnime) {
  const userInput = (input: string) => {
    inputResult(input);
  };

  return (
    <div className="bg-[#191d26] relative w-[18.75rem] md:w-[37.5rem] py-2 px-3 rounded-md md:z-20">
      <input
        type="search"
        placeholder="Filter Anime"
        className="w-full outline-none"
        value={resultSearchedTitle}
        onChange={(event) => userInput(event.target.value)}
      />
    </div>
  );
}

export default FilterAnime;
