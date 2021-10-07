import { useElectron } from "../../contexts/ElectronContext";

export default function Version() {
  const electron = useElectron();
  return (
    <div className="text-center font-semibold text-xs text-blueGray-400">
      v{electron.version}
    </div>
  );
}
