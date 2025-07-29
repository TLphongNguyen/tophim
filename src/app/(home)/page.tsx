import Banner from "@/components/home/banner";
import Topic from "@/components/home/topic";
import ListFilmNew from "@/components/home/listFilmNew";
import ListFilmBo from "@/components/home/listFilmBo";

const home = () => {
  return (
    <div className=" flex flex-col gap-[50px] bg-[#191B24]">
      <Banner />
      <div className="content mx-[50px] flex flex-col gap-[50px]">
        <Topic />
        <ListFilmNew />
        <ListFilmBo />
      </div>
    </div>
  );
};

export default home;
