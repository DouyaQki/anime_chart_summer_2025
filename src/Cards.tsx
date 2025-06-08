import { useQuery } from "@tanstack/react-query";
import "./App.css";
import queryProps from "./queryProps";
import { useRef } from "react";

export type CBProperties = {
  id: number;
  title: string;
  description: string;
  genre: string[];
  studio: string;
  img: string;
};

function Cards({ resultSearchedTitle }: { resultSearchedTitle: string }) {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const { data, isPending, isError } = useQuery(queryProps());

  if (isError) return <p>UPA!</p>;
  if (isPending) return <h3 className="font-bold">Loading...</h3>;

  const season2025 = data[0].season_2025;

  function CBCard(element: CBProperties, index: number) {
    const { id, img, title, studio, description, genre } = element;

    const thereIsNoTags = genre.length === 0;

    return (
      <article
        className="min-w-[20rem] max-w-90 h-50 text-[0.8rem] rounded-md bg-[#1f232d] flex"
        key={id}
      >
        <div id="preview" className="relative w-2/5 font-bold">
          <div className="w-full bottom-0 bg-[#292929da] absolute flex flex-col gap-2 rounded-bl-md p-2">
            <p>{title}</p>
            <p className="text-[#00bcff]">{studio}</p>
          </div>
          <img
            src={img}
            alt={title}
            className="h-full w-full bg-amber-600 rounded-bl-md rounded-tl-md"
          />
        </div>

        <div id="info" className="w-2/3 flex flex-col justify-between">
          <p
            id="card-description"
            className="p-3 overflow-y-auto"
            ref={(refEl) => {
              if (refEl) {
                scrollRef.current[index] = refEl;
              }
            }}
            onMouseOut={() => {
              scrollRef.current[index].scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {description}
          </p>
          {thereIsNoTags ? null : (
            <div className="text-[.7rem] py-2 px-3 flex gap-4 bg-[#191d26] rounded-br-md">
              {genre.map((tag, idx) => (
                <p
                  key={idx}
                  className="text-[#191d26] rounded-full px-2 bg-amber-400 font-bold"
                >
                  {tag}
                </p>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  }

  const season2025Filtered = season2025?.filter((el) => {
    const regex = new RegExp(resultSearchedTitle.toLowerCase(), "g");

    return regex.test(el.title.toLowerCase());
  });

  if (season2025Filtered.length === 0)
    return <h3 className="text-2xl font-bold">Anime not found</h3>;

  if (season2025Filtered.length >= 1) return season2025Filtered?.map(CBCard);

  return season2025?.map(CBCard);
}

export default Cards;
