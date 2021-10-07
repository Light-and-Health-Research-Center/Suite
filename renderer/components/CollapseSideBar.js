import { LogoutIcon } from "@heroicons/react/solid";

export default function CollapseSideBar({ collapsed, setCollapsed }) {
  return (
    <div className={`${collapsed ? "justify-center" : "justify-end"} flex`}>
      <button
        className="rounded-md text-blueGray-400 hover:text-blueGray-600 hover:bg-blueGray-100 active:bg-blueGray-300 p-2"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        <LogoutIcon
          className={`${
            collapsed ? "" : "rotate-180"
          } transition-transform duration-300 ease-in-out transform w-6 h-6`}
        />
      </button>
    </div>
  );
}
