import Banner from "@/components/base/home/banner";
import Topic from "@/components/base/home/topic";
import ListFilmNew from "@/components/base/home/listFilmNew";

const home = () => {
  return (
    <div className=" flex flex-col gap-[50px] bg-[#191B24]">
      <Banner />
      <div className="content mx-[50px] flex flex-col gap-[50px]">
        <Topic />
        <ListFilmNew />
      </div>
    </div>
  );
};

export default home;
