/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import TopFilmComponents from "../base/home/topFilmComponnents";
import { useState, useEffect } from "react";
import ListFilmByNationServices from "@/services/listFilmByNation/ListfilmByNationServices";

const ListFilmBo = () => {
  const [films, setFilms] = useState<any>([]);
  const listfilm = new ListFilmByNationServices(
    process.env.NEXT_PUBLIC_API_URL as string,
    () => {}
  );
  const fetchData = async () => {
    try {
      const response = await listfilm.getlistfilmSeries();
      console.log(response);
      setFilms(response.data.items);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <TopFilmComponents title="Phim Bộ Mới" films={films} />;
};

export default ListFilmBo;
