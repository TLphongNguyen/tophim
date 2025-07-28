/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect } from "react";
import ListFilmByNationServices from "@/services/listFilmByNation/ListfilmByNationServices";
import { FaAngleRight } from "react-icons/fa";

const ListFilmNew = () => {
  const [films, setFilms] = useState<any>({
    china: [],
    korea: [],
    usUk: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const service = new ListFilmByNationServices(
        process.env.NEXT_PUBLIC_API_URL as string,
        () => {}
      );

      const [china, korea, usUk] = await Promise.all([
        service.getListFilmChina(),
        service.getListFilmKorea(),
        service.getListFilmUsUk(),
      ]);

      setFilms({
        china: china.data,
        korea: korea.data,
        usUk: usUk.data,
      });
    };

    fetchData();
    console.log(films);
  }, []);

  return (
    <div className="p-8 rounded-[1rem] flex flex-col gap-4 bg-[linear-gradient(0deg,_rgba(40,43,58,0)_20%,_rgba(40,43,58,1))]">
      <div className="flex justify-between items-center">
        <div className="intro min-w-[200px] flex flex-col gap-[1.5rem] pr-[1.5rem] pl-[0.5rem] ">
          <div className="bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(103,65,150)_130%)] font-[700] bg-clip-text text-transparent text-[28px] leading-[130%]">
            Phim hàn quốc mới
          </div>
          <div className="flex items-center gap-[0.5rem] text-white cursor-pointer hover:text-[#FFD875]">
            <span className="block leading-[140%] text-[14px] ">
              xem toàn bộ
            </span>
            <FaAngleRight />
          </div>
        </div>
        <div className="listfilm max-w-[100%] overflow-x-auto">
          <ul className=" flex gap-[1.5rem]">
            {films?.korea?.items?.map((item: any, index: number) => (
              <li key={index} className="min-w-[288px] cursor-pointer">
                <div className="rounded-[8px] overflow-hidden">
                  <img
                    src={
                      `https://phimapi.com/image.php?url=https://phimimg.com/` +
                      item.thumb_url
                    }
                    alt="anh phim"
                    className="w-full h-[160px] object-cover "
                  />
                </div>
                <div className="px-4 py-3">
                  <h4 className="font-[500] leading-[150%]">
                    <a
                      className="no-underline text-white cursor-pointer"
                      href="#"
                    >
                      {item.name}
                    </a>
                  </h4>
                  <h4 className="font-[500] leading-[150%]">
                    <a
                      className="no-underline text-[#aaa] text-[0.9rem] cursor-pointer"
                      href="#"
                    >
                      {item.origin_name}
                    </a>
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="intro min-w-[200px] flex flex-col gap-[1.5rem] pr-[1.5rem] pl-[0.5rem] ">
          <div className="bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(247,161,11)_130%)] font-[700] bg-clip-text text-transparent text-[28px] leading-[130%]">
            Phim Trung Quốc Mới
          </div>
          <div className="flex items-center gap-[0.5rem] text-white cursor-pointer hover:text-[#FFD875]">
            <span className="block leading-[140%] text-[14px] ">
              xem toàn bộ
            </span>
            <FaAngleRight />
          </div>
        </div>
        <div className="listfilm max-w-[100%] overflow-x-auto">
          <ul className=" flex gap-[1.5rem] ">
            {films?.china?.items?.map((item: any, index: number) => (
              <li key={index} className="min-w-[288px] cursor-pointer">
                <div className="rounded-[8px] overflow-hidden">
                  <img
                    src={
                      `https://phimapi.com/image.php?url=https://phimimg.com/` +
                      item.thumb_url
                    }
                    alt="anh phim"
                    className="w-full h-[160px] object-cover "
                  />
                </div>
                <div className="px-4 py-3">
                  <h4 className="font-[500] leading-[150%]">
                    <a
                      className="no-underline text-white cursor-pointer"
                      href="#"
                    >
                      {item.name}
                    </a>
                  </h4>
                  <h4 className="font-[500] leading-[150%]">
                    <a
                      className="no-underline text-[#aaa] text-[0.9rem] cursor-pointer"
                      href="#"
                    >
                      {item.origin_name}
                    </a>
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="intro min-w-[200px] flex flex-col gap-[1.5rem] pr-[1.5rem] pl-[0.5rem] ">
          <div className="bg-[linear-gradient(235deg,_rgb(255,255,255)_30%,_rgb(255,0,153)_130%)] font-[700] bg-clip-text text-transparent text-[28px] leading-[130%]">
            Phim Việt Nam mới
          </div>
          <div className="flex items-center gap-[0.5rem] text-white cursor-pointer hover:text-[#FFD875]">
            <span className="block leading-[140%] text-[14px] ">
              xem toàn bộ
            </span>
            <FaAngleRight />
          </div>
        </div>
        <div className="listfilm max-w-[100%] overflow-x-auto">
          <ul className=" flex gap-[1.5rem]">
            {films?.usUk?.items?.map((item: any, index: number) => (
              <li key={index} className="min-w-[288px] cursor-pointer">
                <div className="rounded-[8px] overflow-hidden">
                  <img
                    src={
                      `https://phimapi.com/image.php?url=https://phimimg.com/` +
                      item.thumb_url
                    }
                    alt="anh phim"
                    className="w-full h-[160px] object-cover "
                  />
                </div>
                <div className="px-4 py-3">
                  <h4 className="font-[500] leading-[150%]">
                    <a
                      className="no-underline text-white cursor-pointer"
                      href="#"
                    >
                      {item.name}
                    </a>
                  </h4>
                  <h4 className="font-[500] leading-[150%]">
                    <a
                      className="no-underline text-[#aaa] text-[0.9rem] cursor-pointer"
                      href="#"
                    >
                      {item.origin_name}
                    </a>
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ListFilmNew;
