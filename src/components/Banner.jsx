function Banner() {
  return (
    <div className="flex gap-6 p-6 py-16">
      {/* Purple Gradient + Transparent Image Repeat */}
      <div className="relative w-full h-48 flex items-center justify-center text-white text-3xl font-semibold shadow-md rounded-lg overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>
        {/* Transparent Image with Repeat on X-axis */}
        <div className="absolute inset-0 bg-[url('/assets/vector1.png')] bg-repeat-y bg-start"></div>
        {/* Text Content */}
        <div className="relative z-10">In Progress</div>
      </div>

      {/* Green Gradient + Transparent Image Repeat */}
      <div className="relative w-full h-48 flex items-center justify-center text-white text-3xl font-semibold shadow-md rounded-lg overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]"></div>
        {/* Transparent Image with Repeat on X-axis */}
        <div className="absolute inset-0 bg-[url('/assets/vector1.png')] bg-repeat-y bg-Background"></div>
        {/* Text Content */}
        <div className="relative z-10">Resolved</div>
      </div>
    </div>
  );
}

export default Banner;
