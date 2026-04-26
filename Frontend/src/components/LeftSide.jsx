import React from "react";

const LeftSide = () => {
  return (
    <div className="font-['Poppins'] text-center lg:text-start lg:w-[55%] py-28 relative  h-full">
      <h1 className="font-semibold -tracking-wide  text-[#3A3A3A] text-[61px] lg:text-[77px]">
        Fresh Food
        <span className="font-['Cardo'] text-[#8A9B55] italic text-[45px]  absolute left-20 lg:left-[20px] top-45 lg:top-55">
          With
        </span>
      </h1>
      <h1 className="font-semibold leading-16 mt-7 lg:mt-[-8px]  text-[#3A3A3A] text-[61px] lg:text-[77px] lg:ml-30 -tracking-wide">
        GreateTaste
      </h1>

      <img
        className="absolute top-57 left-[53%] lg:left-120 lg:top-57"
        src="/arrow.png"
        alt=""
      />

      <p className="text-[#8a8a8a] lg:w-120 pt-16">
        Experience the joy of great food with delicious dishes made to satisfy
        every craving. Fresh flavors and tasty meals make every bite memorable.
      </p>
    </div>
  );
};

export default LeftSide;
