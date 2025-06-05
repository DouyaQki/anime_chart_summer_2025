import "./App.css";
import { useSuspenseQuery } from "@tanstack/react-query";

export default function Cards() {
  const { data } = useSuspenseQuery({
    // el “query” se puede desestructurar para usar las propiedades, por ej: data, isPending, error, etc…
    queryKey: ["anichart"],
    queryFn: getChart,
  });

  return <>
  {data[0].season_2025.map((el) => <article key={el.id}>
    <img src={el.img} alt={el.title} />
  </article>)}
  </>
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
