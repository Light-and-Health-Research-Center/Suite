import { useRVP } from "../../contexts/RVPContext";
import { CogIcon, QuestionMarkCircleIcon } from "@heroicons/react/solid";

export default function Metrics() {
  const RVP = useRVP();

  return (
    <div className="bg-white-100 shadow-blueGray rounded-md h-72">
      <div className="h-6 px-1 pt-1 flex justify-between mb-1">
        <QuestionMarkCircleIcon className="text-blueGray-400" />
        <CogIcon className="text-blueGray-400" />
      </div>
      <h4 className="text-blueGray-900 text-sm font-bold uppercase text-center px-2">
        Metrics
      </h4>
      <div className="p-4">
        <table className="w-full font-medium selectable">
          <tbody>
            <tr className="selectable">
              <td className="text-blueGray-900 pl-2">Pupil radius</td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.pupilRadius.toFixed(2)}{" "}
                <span className="text-xs text-sky-700">mm</span>
              </td>
            </tr>
            <tr className="bg-blueGray-100 selectable">
              <td className="text-blueGray-900 pl-2">
                Retinal illuminance (Td)
              </td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.retinalIlluminance.toFixed(1)}
              </td>
            </tr>
            <tr>
              <td className="text-blueGray-900 pl-2">Threshold contrast</td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.thresholdContrast.toFixed(2)}
              </td>
            </tr>
            <tr className="bg-blueGray-100">
              <td className="text-blueGray-900 pl-2">
                Half saturation constant (K)
              </td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.halfSaturationConstant.toFixed(6)}
              </td>
            </tr>
            <tr>
              <td className="text-blueGray-900 pl-2">
                Maximum response (R<sub>max</sub>)
              </td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.maximumResponse.toFixed(6)}
              </td>
            </tr>
            <tr className="bg-blueGray-100">
              <td className="text-blueGray-900 pl-2">Performance (R)</td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.performance.toFixed(6)}
              </td>
            </tr>
            <tr>
              <td className="text-blueGray-900 pl-2">Reaction time</td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.reactionTime.toFixed(0)}{" "}
                <span className="text-xs text-sky-700">ms</span>
              </td>
            </tr>
            <tr className="bg-blueGray-100">
              <td className="text-blueGray-900 pl-2">Visibility level</td>
              <td className="font-bold text-sky-700 text-right pr-2">
                {RVP.calculation.visibilityLevel.toFixed(1)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
