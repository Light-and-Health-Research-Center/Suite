import { useRouter } from "next/router";
import NavigationItem from "./NavigationItem";

export default function Navigation({ collapsed }) {
  const router = useRouter();
  return (
    <div className="overflow-auto mt-2 mb-8 scrollbar-hide flex-grow -mx-2">
      <h6
        className={`${
          collapsed && "invisible"
        } font-medium text-blueGray-400 text-2xs m-2`}
      >
        CALCULATORS
      </h6>
      <NavigationItem
        title="RVP"
        link="/rvp"
        icon="ChartPie"
        collapsed={collapsed}
      />
      <NavigationItem
        title="Zonal"
        link="/zonal"
        icon="ChartBar"
        collapsed={collapsed}
      />
    </div>
  );
}
