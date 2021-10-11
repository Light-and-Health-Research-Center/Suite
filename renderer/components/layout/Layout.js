import TopBar from "./TopBar";
import SideBar from "./SideBar";
import Main from "./Main";

export default function Layout({ children }) {
  return (
    <div className="h-screen max-h-screen flex">
      <SideBar />
      <div className="w-full flex flex-col">
        <TopBar />
        <Main>{children}</Main>
      </div>
    </div>
  );
}
