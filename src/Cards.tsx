import "./App.css";
import { useSuspenseQuery } from "@tanstack/react-query";
// import imgFallback from "../public/show_img/fallback.png";

const QUERY_KEY = "anichart";

export default function Cards() {
  const { data } = useSuspenseQuery({
    queryKey: [QUERY_KEY],
    queryFn: getChart,
  });

  const { season_2025 } = data[0];

  return season_2025.map(({ id, img, title, studio, description, genre }) => {
    const thereIsNoTags = genre.length === 0 || genre.includes("-");

    return (
      <article
        className="min-w-[20rem] max-w-90 h-50 text-[0.8rem] rounded-md bg-[#1f232d] flex"
        key={id}
      >
        <div id="preview" className="relative w-2/5 font-bold">
          <div className="w-full bottom-0 bg-[#292929da] absolute flex flex-col gap-2 rounded-bl-md p-2">
            <p className="">{title}</p>
            <p className="text-[#00bcff]">
              {studio.includes("-") ? "" : studio}
            </p>
          </div>
          <img
            src={img}
            alt=""
            className="h-full w-full bg-amber-600 rounded-bl-md rounded-tl-md"
          />
        </div>

        <div id="info" className="w-2/3 flex flex-col justify-between">
          <p className="p-3 overflow-y-auto">{description}</p>
          {thereIsNoTags ? null : (
            <div className="text-[.7rem] py-2 px-3 flex gap-4 bg-[#191d26] rounded-br-md">
              {genre.map((tag, idx) => (
                <p
                  key={idx}
                  className="text-[#191d26] rounded-full px-2 bg-amber-400 font-bold"
                >
                  {tag.includes("-") ? "" : tag}
                </p>
              ))}
            </div>
          )}
        </div>
      </article>
    );
  });
}

async function getChart(): Promise<T_chart[]> {
  const response = await fetch(
    "https://douyaqki.github.io/anime_chart_summer_2025/anichar2025.json"
  );

  return response.json();
}

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
