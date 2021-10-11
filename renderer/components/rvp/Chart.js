import { useRVP } from "../../contexts/RVPContext";
import { CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function Chart() {
  const RVP = useRVP();

  return (
    <div className="bg-white-100 shadow-blueGray rounded-md h-72 flex flex-col">
      <div>
        <div className="h-6 px-1 pt-1 flex justify-between mb-1">
          <QuestionMarkCircleIcon className="text-blueGray-400" />
          <CogIcon className="text-blueGray-400" />
        </div>
        <h4 className="text-blueGray-900 text-sm font-bold uppercase text-center px-2">
          Chart
        </h4>
      </div>
      <div className="p-4 my-auto">yes</div>
    </div>
  );
}
