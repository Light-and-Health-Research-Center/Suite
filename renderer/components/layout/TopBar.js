import WindowButtons from "./WindowButtons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const titles = {
  "/home": "LHRC Suite",
  "/rvp": "rvp calculator",
  "/zonal": "Zonal Cavity Calculator",
};

export default function TopBar() {
  const router = useRouter();
  const [title, setTitle] = useState(titles[router.pathname]);

  useEffect(() => {
    setTitle(titles[router.pathname]);
  }, [router]);
  return (
    <div className="bg-blueGray-700 h-11 window-drag flex justify-between text-white-100">
      <h1 className="pl-6 my-auto font-medium text-md uppercase text-sm">
        {title}
      </h1>
      <WindowButtons />
    </div>
  );
}
