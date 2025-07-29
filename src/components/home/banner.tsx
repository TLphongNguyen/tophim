/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { FaPlay, FaHeart } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { useState, useEffect } from "react";
import BannerServices from "@/services/banner/bannerServices";
import { motion, AnimatePresence } from "framer-motion";

type BannerItem = {
  slug: string;
  thumb_url: string;
  name: string;
};

const Banner = () => {
  const [bannerData, setBannerData] = useState<BannerItem[]>([]);
  const [dataFilm, setDataFilm] = useState<any>([]);
  const [activeSlug, setActiveSlug] = useState<string>("");
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const bannerServices = new BannerServices(baseUrl as string, () => {
    console.error("Unauthenticated access");
  });

  const fetchBannerData = async () => {
    try {
      const response: any = await bannerServices.getTopfilmList();
      setBannerData(response.data.items);
    } catch (error) {
      console.error("Error fetching banner data:", error);
    }
  };
  useEffect(() => {
    fetchBannerData();
  }, []);

  useEffect(() => {
    if (bannerData.length > 0) {
      setActiveSlug(bannerData[0].slug);
      fetchFilmBySlug(bannerData[0].slug);
    }
  }, [bannerData]);

  const fetchFilmBySlug = async (slug: string) => {
    try {
      const response: any = await bannerServices.getfilmbyslug(slug);
      setDataFilm(response.movie);
    } catch (error) {
      console.error("Error fetching film by slug:", error);
    }
  };
  const handleClick = async (slug: string) => {
    setActiveSlug(slug);
    fetchFilmBySlug(slug);
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={dataFilm.slug}
        initial={{ opacity: 0.9, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0.9, x: 0 }}
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="w-full h-[860px] relative"
      >
        <img
          src={dataFilm.thumb_url}
          alt=""
          className="w-full h-full object-cover"
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={dataFilm.slug}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            // exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="content-banner max-w-[700px] w-full px-[50px] py-[100px] absolute top-[50%] left-0 translate-y-[-50%] z-[4]"
          >
            <div className="name text-[3rem] text-[#FFD875]">
              {dataFilm.name || "Loading..."}
            </div>
            <h2 className="name-eng block text-[1.1rem] text-[#FFD875] cursor-pointer mb-4 font-[300] leading-[150%]">
              {dataFilm.origin_name || "Loading..."}
            </h2>
            <div className="flex items-center gap-[0.6rem]">
              <div className="h-[26px] text-[12px] leading-[26px] px-[0.4rem] bg-[#ffffff10] text-white border-[1px] border-solid border-[#fff] rounded-[0.3rem] ">
                16+
              </div>
              <div className="h-[26px] text-[12px] leading-[26px] px-[0.4rem] bg-[#ffffff10] text-white border-[1px] border-solid border-[#fff] rounded-[0.3rem] episode_total">
                12t
              </div>
              <div className="h-[26px] text-[12px] leading-[26px] px-[0.4rem] bg-[#ffffff10] text-white border-[1px] border-solid border-[#fff] rounded-[0.3rem] quality">
                {dataFilm.quality || "HD"}
              </div>
              <div className="h-[26px] text-[12px] leading-[26px] px-[0.4rem] bg-[#ffffff10] text-white border-[1px] border-solid border-[#fff] rounded-[0.3rem] year">
                2025
              </div>
            </div>
            <ul className="flex items-center gap-[0.5rem] mt-[0.6rem] mb-[24px]">
              {dataFilm?.category?.map((item: any, index: number) => (
                <li
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleClick(item.slug)}
                >
                  <span className="h-[26px] block text-[12px] leading-[26px] px-[0.4rem] bg-[#ffffff10] text-white rounded-[0.3rem]">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
            <div className="line-clamp-3 text-[14px] text-white font-[400] leading-[160%] mb-8">
              {dataFilm.content}
            </div>
            <div className="flex items-center gap-[2rem]">
              <a
                href=""
                className="w-[70px] h-[70px] bg-[linear-gradient(39deg,_rgba(254,207,89,1),_rgba(255,241,204,1))] rounded-[50%] flex items-center justify-center hover:shadow-[0_5px_10px_10px_rgba(255,218,125,0.15)]"
              >
                <FaPlay className="text-[24px]" />
              </a>
              <div className="rounded-[30px] border-[2px] border-solid border-[#ffffff10] flex items-center hover:border-[#fff] ">
                <div className="h-[50px] min-w-[68px] flex items-center justify-center text-[20px] text-white cursor-pointer hover:text-[#FFD875]">
                  <FaHeart />
                </div>
                <div className="h-[50px] min-w-[68px] flex items-center justify-center text-[20px] text-white cursor-pointer border-l-[2px] border-solid border-[#ffffff10] hover:text-[#FFD875]">
                  <CiCircleInfo />
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute left-0 right-0 bottom-0 h-[200px] z-[3] bg-gradient-to-t from-[#191b24] to-[#191b24]/0"></div>
        <div className="listFilm absolute right-0 z-[3] bottom-[260px] px-[50px]">
          <ul className="flex items-center">
            {bannerData?.map((item: any, index: number) => (
              <li
                onClick={() => handleClick(item.slug)}
                key={index}
                className={`w-[70px] mr-[5px] border-[2px] border-solid cursor-pointer rounded-[8px] overflow-hidden transform hover:scale-[1.05] transition-all duration-300
    ${
      activeSlug === item.slug
        ? "border-[#fff] scale-[1.05] border-[3px]"
        : "border-[#ffffff24] scale-0.1]"
    }`}
              >
                <img
                  src={
                    `https://phimapi.com/image.php?url=https://phimimg.com/` +
                    item.thumb_url
                  }
                  alt={item.name}
                  className=" w-full object-cover"
                />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
export default Banner;
