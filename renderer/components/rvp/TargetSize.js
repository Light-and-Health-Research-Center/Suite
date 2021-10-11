import { useRVP } from "../../contexts/RVPContext";
import { CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function TargetSize() {
  const RVP = useRVP();
  return (
    <div className="bg-white-100 shadow-blueGray rounded-md h-48">
      <div className="h-6 px-1 pt-1 flex justify-between">
        <QuestionMarkCircleIcon className="text-blueGray-400" />
        <CogIcon className="text-blueGray-400" />
      </div>
      <h4 className="text-blueGray-900 text-sm font-bold uppercase text-center px-2">
        Target Size
      </h4>
      <div className="p-4">
        <div className="bg-blueGray-100 rounded-lg mx-6 focus-within:ring-2 ring-sky-700 ring-offset-4">
          <input
            className="bg-transparent text-center w-full text-5xl pt-3 text-sky-700 font-bold"
            type="number"
            name="targetSize"
            value={RVP.targetSize}
            onChange={(e) => {
              RVP.setTargetSize(e.target.value);
            }}
          />
          <p className="w-full text-center font-semibold text-sm text-gray-600 pb-3 pt-1">
            µsr
          </p>
        </div>
      </div>
    </div>
  );
}
