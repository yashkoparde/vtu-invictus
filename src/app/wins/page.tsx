import { useEffect, useState } from "react";
import { getWins, type WinItem } from "@/lib/wins-service";
import fallbackWins from "@/data/wins";
import WinsClient from "./WinsClient";

export default function WinsPage() {
  const [winsData, setWinsData] = useState<WinItem[]>(() =>
    fallbackWins.map((w) => ({ ...w, images: [] }))
  );

  useEffect(() => {
    let active = true;
    getWins().then((data) => {
      if (active) setWinsData(data);
    });
    return () => {
      active = false;
    };
  }, []);

  return <WinsClient winsData={winsData} />;
}
