import { DownloadIcon } from "@heroicons/react/solid";
import { useElectron } from "../../contexts/ElectronContext";

export default function InstallUpdate({ collapsed }) {
  const electron = useElectron();
  return (
    <div className={`${electron.updateReady ? "block" : "hidden"} mb-2`}>
      <button
        className={`rounded-md p-2 w-full flex flex-row justify-around text-blueGray-600 hover:bg-blueGray-100 hover:text-blueGray-700 active:bg-blueGray-300`}
        onClick={() => {
          electron.update();
        }}
      >
        <DownloadIcon className={`w-7 h-7 my-auto`} />
        <p
          className={`${
            collapsed ? "hidden" : "inline-flex"
          } text-xs font-bold w-min text-center`}
        >
          INSTALL UPDATE
        </p>
      </button>
    </div>
  );
}
