/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { useState, useEffect } from "react";
import ListFilmByNationServices from "@/services/listFilmByNation/ListfilmByNationServices";
import FilmSection from "../base/home/FilmSection";

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
      <FilmSection
        title="Phim Hàn Quốc Mới"
        gradient="linear-gradient(235deg, rgb(255,255,255) 30%, rgb(103,65,150) 130%)"
        films={films.korea?.items || []}
      />
      <FilmSection
        title="Phim Trung Quốc Mới"
        gradient="linear-gradient(235deg, rgb(255,255,255) 30%, rgb(247,161,11) 130%)"
        films={films.china?.items || []}
      />
      <FilmSection
        title="Phim Việt Nam Mới"
        gradient="linear-gradient(235deg, rgb(255,255,255) 30%, rgb(255,0,153) 130%)"
        films={films.usUk?.items || []}
      />
    </div>
  );
};
export default ListFilmNew;
