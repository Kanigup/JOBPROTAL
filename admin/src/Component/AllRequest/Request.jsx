import "./request.css";

export default function Request() {
  return (
    <div className="main mt-4">
      <div className="w-[15%]">
        <h1 className="p-1 text-xm font-bold">Hr Name</h1>
        <h2 className="p-1">Manish Rajput</h2>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[12%]">
        <h1 className="p-1 text-xm font-bold">Company</h1>
        <h1 className="p-1">Microsoft</h1>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[12%]">
        <h1 className="p-1 text-xm font-bold">Company Address</h1>
        <h1 className="p-1">Mumbai</h1>
      </div>
      <div className="vertical-line"></div>
      <div className="w-[10%]">
        <button className="btn btn-secondary btn-lg mt-2 h-[65%] pt-1">
          View
        </button>
      </div>
    </div>
  );
}
