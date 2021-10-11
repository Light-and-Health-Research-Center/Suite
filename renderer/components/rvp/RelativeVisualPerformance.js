import { useRVP } from "../../contexts/RVPContext";
import { CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function RelativeVisualPerformance() {
  const RVP = useRVP();

  function getRVPColor(rvp) {
    if (rvp >= 0.9) {
      return "text-green-500";
    } else if (rvp >= 0.8) {
      return "text-yellow-400";
    } else if (rvp >= 0.7) {
      return "text-amber-600";
    } else {
      return "text-red-600";
    }
  }

  return (
    <div className="bg-white-100 shadow-blueGray rounded-md h-72 flex flex-col">
      <div>
        <div className="h-6 px-1 pt-1 flex justify-between mb-1">
          <QuestionMarkCircleIcon className="text-blueGray-400" />
          <CogIcon className="text-blueGray-400" />
        </div>
        <h4 className="text-blueGray-900 text-sm font-bold uppercase text-center px-10">
          Relative Visual Performance (RVP)
        </h4>
      </div>
      <div className="p-4 my-auto selectable">
        <div
          className={`${getRVPColor(
            RVP.calculation.relativeVisualPerformance
          )} text-center w-full text-7xl py-5 font-bold`}
        >
          {RVP.calculation.relativeVisualPerformance.toFixed(3)}
        </div>
      </div>
    </div>
  );
}
