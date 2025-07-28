import Banner from "@/components/base/home/banner";
import Topic from "@/components/base/home/topic";

const home = () => {
  return (
    <div className=" flex flex-col gap-[50px] bg-[#191B24]">
      <Banner />
      <Topic />
    </div>
  );
};

export default home;
