'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import ListFilmByNationServices from '@/services/listFilmByNation/ListfilmByNationServices';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import 'swiper/css';
import 'swiper/css/navigation';

const ListFilmLe = () => {
	const [listFilm, setListFilm] = useState<any[]>([]);
	const baseUrl = process.env.NEXT_PUBLIC_API_URL;
	const listfilmServices = new ListFilmByNationServices(baseUrl as string, () => {});

	const fetchData = async () => {
		try {
			const response = await listfilmServices.getListfilmLe();
			setListFilm(response.data.items);
			console.log(response.data.items);
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<h1 className="mb-5 text-[28px] leading-[140%] font-semibold text-white">Top 10 phim bộ hôm nay</h1>
			<div className="relative">
				<button
					className="swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8  rounded-full flex items-center justify-center text-white  transition"
					style={{ outline: 'none', border: 'none' }}
				></button>
				<button
					className="swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8  rounded-full flex items-center justify-center text-white  transition"
					style={{ outline: 'none', border: 'none' }}
				></button>
				<Swiper
					modules={[Navigation]}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					spaceBetween={24}
					slidesPerView={6}
					style={{ touchAction: 'pan-y' }}
					className="py-2"
				>
					{listFilm.map((film: any, index: number) => (
						<SwiperSlide key={film._id} style={{ width: 284 }}>
							<div className="film-item w-[284px]">
								<div className="flex flex-col gap-[12px] w-full relative">
									<a
										href="#"
										className="bg-transparent rounded-[8px] relative h-0 pb-[150%] block overflow-hidden "
									>
										<div
											className={`mark absolute top-0 left-0 right-0 bottom-0 bg-[#FFD875] hover:bg-[#FFD875] ${
												index % 2 === 0 ? 'modal-left' : 'modal-right'
											}`}
										></div>
										<div className="">
											<Image
												src={`https://phimapi.com/image.php?url=https://phimimg.com/${film.poster_url}`}
												alt={film.name}
												className={`${
													index % 2 === 0 ? 'modal-left' : 'modal-right'
												} hover-img`}
												layout="fill"
												objectFit="cover"
											/>
										</div>
									</a>
									<div className="flex items-center">
										<p className="text-[4.2em] font-italic bg-[linear-gradient(39deg,rgba(254,207,89,1),rgba(255,241,204,1))] font-extrabold bg-clip-text text-transparent mr-[20px] ">
											{index + 1}
										</p>
										<div className="flex flex-col gap-[0.2rem]">
											<span className="text-[14px] leading-[150%] text-white line-clamp-1 cursor-pointer">
												{film.name}
											</span>
											<span className="text-[12.6px]  text-[#aaa] line-clamp-1 cursor-pointer ">
												{film.origin_name}
											</span>
											<div className="flex gap-3 items-center cursor-pointer">
												<span className="text-sm font-extrabold text-white">{film.time}</span>
												<p className="text-sm font-bold text-white">{film.quality}</p>
												<p className="text-sm font-bold text-white">{film.year}</p>
											</div>
										</div>
									</div>
								</div>
								<h2 className="text-lg font-semibold text-white mb-2"></h2>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ListFilmLe;
