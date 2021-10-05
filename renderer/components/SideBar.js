import { useState } from "react";
import { LogoutIcon } from "@heroicons/react/solid";
import { DownloadIcon } from "@heroicons/react/solid";
import { useElectron } from "../contexts/ElectronContext";

export default function SideBar() {
  const electron = useElectron();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`${
        collapsed ? "w-20" : "w-52"
      } relative bg-white-100 h-100 shadow-blueGrayRight overflow-hidden z-10 transition-all p-4`}
    >
      <div className="h-full flex flex-col justify-between">
        <div className={`${collapsed ? "justify-center" : "justify-end"} flex`}>
          <button
            className="rounded-md text-blueGray-400 hover:text-blueGray-600 hover:bg-blueGray-100 p-2"
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            <LogoutIcon
              className={`${
                collapsed ? "" : "rotate-180"
              } transition-transform duration-300 ease-in-out transform w-6 h-6`}
            />
          </button>
        </div>
        <div>
          <div className={`${electron.updateReady ? "block" : "hidden"} mb-2`}>
            <button
              className={`rounded-md p-2 w-full flex flex-row justify-around text-blueGray-600 hover:bg-blueGray-100 hover:text-blueGray-700`}
              onClick={() => {
                electron.update();
              }}
            >
              <DownloadIcon className={`w-7 h-7 my-auto`} />
              <p
                className={`${
                  collapsed ? "hidden" : "inline-flex"
                } text-sm font-semibold w-min text-center`}
              >
                DOWNLOAD UPDATE
              </p>
            </button>
          </div>
          <div className="text-center font-semibold text-xs text-blueGray-400">
            v{electron.version}
          </div>
        </div>
      </div>
    </div>
  );
}
