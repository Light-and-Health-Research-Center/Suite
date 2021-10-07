import { useElectron } from "../../contexts/ElectronContext";
import { Icon } from "@iconify/react";
export default function WindowButtons() {
  const electron = useElectron();

  return (
    <div className="window-nodrag h-full">
      <button
        className="w-11 h-full hover:bg-blueGray-500"
        onClick={() => {
          electron.minimizeWindow();
        }}
      >
        <Icon icon="codicon:chrome-minimize" className="mx-auto" />
      </button>
      {electron.maximized ? (
        <button
          className="w-11 h-full hover:bg-blueGray-500"
          onClick={() => {
            electron.unmaximizeWindow();
          }}
        >
          <Icon icon="codicon:chrome-restore" className="mx-auto" />
        </button>
      ) : (
        <button
          className="w-11 h-full hover:bg-blueGray-500"
          onClick={() => {
            electron.maximizeWindow();
          }}
        >
          <Icon icon="codicon:chrome-maximize" className="mx-auto" />
        </button>
      )}

      <button
        className="w-11 h-full hover:bg-red-500"
        onClick={() => {
          electron.closeWindow();
        }}
      >
        <Icon icon="codicon:chrome-close" className="mx-auto" />
      </button>
    </div>
  );
}
