import MainSectionTitle from "../components/layout/MainSectionTitle";

export default function rvp() {
  return (
    <div>
      <MainSectionTitle text="inputs" />
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white-100 shadow-blueGray rounded-md h-48 p-4 mb-6">
          yes
        </div>
        <div className="bg-white-100 shadow-blueGray rounded-md h-48 p-4 mb-6">
          yes
        </div>
        <div className="bg-white-100 shadow-blueGray rounded-md h-48 p-4 mb-6">
          yes
        </div>
        <div className="bg-white-100 shadow-blueGray rounded-md h-48 p-4 mb-6">
          yes
        </div>
      </div>

      <MainSectionTitle text="outputs" />
      <div className="bg-white-100 shadow-blueGray rounded-md w-full h-48 p-4">
        yes
      </div>
    </div>
  );
}
