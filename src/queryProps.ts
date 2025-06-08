import { queryOptions } from "@tanstack/react-query";

const QUERY_KEY = "anichart";
const API =
  "https://douyaqki.github.io/anime_chart_summer_2025/anichar2025.json";

function queryProps() {
  return queryOptions({
    queryKey: [QUERY_KEY],
    queryFn: getChart,
  });
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

async function getChart(): Promise<T_chart[]> {
  const response = await fetch(API);

  return response.json();
}

export default queryProps;
