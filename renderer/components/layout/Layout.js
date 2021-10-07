import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Main from "./Main";

export default function Layout({ children }) {
  return (
    <div className="bg-blueGray-50 h-screen flex">
      <SideBar />
      <div className="flex-grow">
        <TopBar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
