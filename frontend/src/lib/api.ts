export type RaceType = "5K" | "10K" | "semi" | "marathon";

export interface Race {
  id: number;
  name: string;
  date: string;
  type: RaceType;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL!;

if (!API_URL) throw new Error("NEXT_PUBLIC_API_URL is not defined");

export async function fetchNearbyRaces(params: {
  lat: number;
  lng: number;
  radiusKM: number;
  type?: RaceType | "all";
}): Promise<Race[]> {
  const url = new URL("${API_URL}/races/nearby");
  url.searchParams.set("lat", String(params.lat));
  url.searchParams.set("lng", String(params.lng));
  url.searchParams.set("radiusKM", String(params.radiusKM));
  if (params.type && params.type !== "all")
    url.searchParams.set("type", params.type);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("API Error ${res.status}");
  return res.json();
}
