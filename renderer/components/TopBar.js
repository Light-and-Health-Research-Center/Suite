import WindowButtons from "./WindowButtons";

export default function TopBar() {
  return (
    <div className="bg-blueGray-700 h-14 window-drag flex justify-between text-white-100">
      <h1 className="pl-6 my-auto font-semibold text-md">RVP CALCULATOR</h1>
      <WindowButtons />
    </div>
  );
}
