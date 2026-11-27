/// <reference types="vite/client" />
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import fallbackWins from "@/data/wins";

export interface WinItem {
  id: string;
  name: string;
  location: string;
  position: string;
  displayDate: string;
  sortDate: string;
  images: string[];
}

const localPhotoModules = import.meta.glob(
  "../../public/photos/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: false }
);

function getLocalWinImages(winId: string): string[] {
  const prefix = `../../public/photos/${winId}/`;
  return Object.keys(localPhotoModules)
    .filter((key) => key.startsWith(prefix))
    .map((key) => `/photos/${winId}/${key.slice(prefix.length)}`);
}

export async function getWins(): Promise<WinItem[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from("wins")
        .select("*")
        .order("sort_date", { ascending: false });

      if (!error && data && data.length > 0) {
        return data.map((row: any) => ({
          id: String(row.id),
          name: row.name,
          location: row.location,
          position: row.position,
          displayDate: row.display_date,
          sortDate: row.sort_date,
          images: Array.isArray(row.images) ? row.images : [],
        }));
      }
    } catch (err) {
      console.warn("Supabase wins query failed, falling back to local files:", err);
    }
  }

  return fallbackWins.map((win) => ({
    ...win,
    images: getLocalWinImages(win.id),
  }));
}
