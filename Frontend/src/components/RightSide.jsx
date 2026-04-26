const RightSide = () => {
  return (
    <div className="w-full lg:max-w-[50%] font-['Poppins']">
      {/* IMAGE CARD */}

      <div className="w-full relative h-[300px] md:h-[420px] lg:h-[500px] rounded-3xl overflow-hidden">
        <img
          className="absolute w-full h-full object-cover "
          src="/Home.png"
          alt=""
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div className="absolute bottom-6 left-6 text-white text-xl md:text-3xl lg:text-4xl font-semibold w-[80%]">
          Savor Healthy Eats – Keep it Casual and Easy-Going!
        </div>
      </div>

      {/* RATING BAR */}

      <div className="w-full mt-6 h-16 md:h-20 rounded-full px-6 md:px-12 flex items-center justify-between bg-black text-white">
        <h2 className="text-sm md:text-2xl font-medium">3,500 + Ratings</h2>

        <div className="flex gap-1">
          <img className="w-5 md:w-7" src="/star-s-fill.png" alt="" />
          <img className="w-5 md:w-7" src="/star-s-fill.png" alt="" />
          <img className="w-5 md:w-7" src="/star-s-fill.png" alt="" />
          <img className="w-5 md:w-7" src="/star-s-fill.png" alt="" />
          <img className="w-5 md:w-7" src="/star-s-fill.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
