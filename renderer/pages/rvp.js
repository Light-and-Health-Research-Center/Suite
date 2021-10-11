import SectionTitle from "../components/main/SectionTitle";
import AgeOfObserver from "../components/rvp/AgeOfObserver";
import LuminanceContrast from "../components/rvp/LuminanceContrast";
import TargetSize from "../components/rvp/TargetSize";
import BackgroundLuminance from "../components/rvp/BackgroundLuminance";
import { useRVP } from "../contexts/RVPContext";
import RelativeVisualPerformance from "../components/rvp/RelativeVisualPerformance";
import Metrics from "../components/rvp/Metrics";
import Chart from "../components/rvp/Chart";

export default function rvp() {
  const RVP = useRVP();
  return (
    <>
      <SectionTitle text="inputs" />
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="col-span-2 lg:col-span-1">
          <AgeOfObserver />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <LuminanceContrast />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <TargetSize />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <BackgroundLuminance />
        </div>
      </div>

      <SectionTitle text="outputs" />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-5 xl:col-span-3">
          <RelativeVisualPerformance />
        </div>
        <div className="col-span-7 xl:col-span-4">
          <Metrics />
        </div>
        <div className="col-span-12 xl:col-span-5">
          <Chart />
        </div>
      </div>
    </>
  );
}
