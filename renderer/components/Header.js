import { useElectron } from "./ElectronContext";
import { Icon } from "@iconify/react";

export default function Header() {
  const electron = useElectron();
  return (
    <div className="bg-black-100 h-8 window-drag flex justify-between">
      <h1 className="pl-2 window-nodrag">
        <span className="inline-block align-middle">LHRC Suite</span>
      </h1>
      <div className="window-nodrag h-full">
        <button
          className="w-8 h-full hover:bg-gray-700"
          onClick={() => {
            electron.minimizeWindow();
          }}
        >
          <Icon icon="codicon:chrome-minimize" className="mx-auto" />
        </button>
        <button
          className="w-8 h-full hover:bg-gray-700"
          onClick={() => {
            electron.maximizeWindow();
          }}
        >
          <Icon icon="codicon:chrome-maximize" className="mx-auto" />
        </button>
        <button
          className="w-8 h-full hover:bg-red-500"
          onClick={() => {
            electron.closeWindow();
          }}
        >
          <Icon icon="codicon:chrome-close" className="mx-auto" />
        </button>
      </div>
    </div>
  );
}
