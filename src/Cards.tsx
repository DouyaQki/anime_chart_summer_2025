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

  return season_2025.map(({ id, img, title, studio, description }) => {
    return (
      <article
        className="text-[0.8rem] rounded-md h-50 w-90 bg-[#1f232d] flex"
        key={id}
      >
        <div id="preview" className="relative w-2/5">
          <div className="w-full bottom-0 bg-[#000000a9] absolute flex flex-col gap-2">
            <p className="">{title}</p>
            <p className="">{studio}</p>
          </div>
          <img src={img} alt="" className="h-full w-full bg-amber-600" />
        </div>

        <div id="info" className="w-2/3 flex flex-col justify-between ">
          <p className="p-3 overflow-y-auto">{description}</p>
          <div className="py-2 px-3 flex gap-4 bg-blue-950">
            <p className="text-[#000] rounded-md px-1 bg-amber-400">Comedy</p>
            <p className="text-[#000] rounded-md px-1 bg-amber-400">Action</p>
          </div>
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
