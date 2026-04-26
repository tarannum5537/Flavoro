import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const Home = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-3 lg:px-6 pt-10 pb-8 flex flex-col lg:flex-row lg:gap-10">

      {/* LEFT */}
      <LeftSide />

      {/* RIGHT */}
      <RightSide />

    </div>
  );
};

export default Home;