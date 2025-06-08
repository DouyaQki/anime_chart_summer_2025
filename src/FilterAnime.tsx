import "./App.css";

type T_FindAnime = {
  inputResult: (input: string) => void;
  resultSearchedTitle: string
};

function FilterAnime({ inputResult, resultSearchedTitle }: T_FindAnime) {
  const userInput = (input: string) => {
    inputResult(input);
  };
  
  return (
    <div className="bg-[#191d26] py-2 px-3 rounded-md">
      <input
        type="search"
        placeholder="Filter Anime"
        className="w-full outline-none "
        value={resultSearchedTitle}
        onChange={(event) => userInput(event.target.value)}
      />
    </div>
  );
}

export default FilterAnime;
