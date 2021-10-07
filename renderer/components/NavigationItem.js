import Link from "next/link";
import { useRouter } from "next/router";
import { ChartPieIcon, ChartBarIcon } from "@heroicons/react/outline";

export default function NavigationItem({ title, link, icon, collapsed }) {
  const router = useRouter();
  return (
    <Link href={link}>
      <a>
        <div
          className={`${
            router.pathname === link
              ? "bg-blueGray-50 border-blueGray-900"
              : "border-opacity-0 "
          } border-r-4 flex h-11 px-2 text-blueGray-900 hover:bg-blueGray-200 cursor-pointer active:bg-blueGray-300`}
        >
          <ChartPieIcon
            className={`${collapsed && "mx-auto"} py-1 h-full flex-shrink-0`}
          />
          <h4
            className={`${
              collapsed ? "hidden" : "block"
            } font-extrabold text-center mx-1 leading-tight my-auto flex-grow uppercase text-xs`}
          >
            {title}
          </h4>
        </div>
      </a>
    </Link>
  );
}
