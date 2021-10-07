import { useState } from "react";
import CollapseSideBar from "./CollapseSideBar";
import InstallUpdate from "./InstallUpdate";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Version from "./Version";

export default function SideBar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className={`${
        collapsed ? "w-14" : "w-36"
      } relative bg-white-100 h-100 shadow-blueGrayRight overflow-hidden z-10 transition-all p-2`}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <CollapseSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Logo />
        </div>
        <Navigation collapsed={collapsed} />
        <div>
          <InstallUpdate collapsed={collapsed} />
          <Version />
        </div>
      </div>
    </div>
  );
}
