function Banner({ cards = [] }) {

  const inProgressNo = cards?.filter(
    card => card.status === "In Progress"
  ).length || 0;

  const resolvedNo = cards?.filter(
    card => card.status === "Done"
  ).length || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 py-16">


      <div className="relative w-full h-48 flex items-center justify-center text-white shadow-md rounded-lg overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>
        <div className="absolute inset-0 bg-[url('/assets/vector1.png')] bg-repeat-y"></div>

        <div className="relative z-10 text-center">
          <p className="text-2xl font-medium">In Progress</p>
          <p className="text-5xl font-bold mt-2">{inProgressNo}</p>
        </div>

      </div>


      <div className="relative w-full h-48 flex items-center justify-center text-white shadow-md rounded-lg overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]"></div>
        <div className="absolute inset-0 bg-[url('/assets/vector1.png')] bg-repeat-y"></div>

        <div className="relative z-10 text-center">
          <p className="text-2xl font-medium">Resolved</p>
          <p className="text-5xl font-bold mt-2">{resolvedNo}</p>
        </div>

      </div>

    </div>
  );
}

export default Banner;
