/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import "swiper/css";
import { FaAngleRight } from 'react-icons/fa';
import HoverComponent from '../hoverComponent';

type FilmItems = {
	name: string;
	origin_name: string;
	thumb_url: string;
	poster_url?: string;
	slug: string;
	category: []; // Optional property for poster URL
};
type Props = {
	title: string;
	films: FilmItems[];
};

const TopFilmComponents = ({ title, films }: Props) => {
	const [isHover, setIsHover] = useState<string | null>();

	const setIsHoverFunc = (slug: string) => {
		setTimeout(() => {
			setIsHover(slug);
		}, 500);
	};
	return (
		<div>
			<header className="flex items-center gap-[1rem] mb-5">
				<h1 className="text-[28px] text-white font-semibold leading-[140%]">{title}</h1>
				<div className="w-[30px] h-[30px] rounded-[50%] border-[1px] border-[#fff5] border-solid flex items-center justify-center cursor-pointer hover:bg-[#fff5] transition-all duration-300">
					<FaAngleRight className="text-white" />
				</div>
			</header>
			<Swiper
				spaceBetween={16}
				slidesPerView={'auto'}
				style={{ touchAction: 'pan-y' }}
				className="listfilm min-h-[316px] cursor-pointer relative"
			>
				{films.map((film, index) => (
					<SwiperSlide
						key={index}
						style={{ width: 211 }}
						onMouseEnter={() => setIsHoverFunc(film.slug)}
						onMouseLeave={() => setIsHover(null)}
						className="h-full !flex flex-col gap-[0.75rem] !transform-none "
					>
						<img
							src={`https://phimapi.com/image.php?url=https://phimimg.com/${
								film.poster_url || film.thumb_url
							}`}
							alt={film.name}
							className="w-full h-[316px] rounded object-cover"
						/>
						<h2 className="text-sm font-semibold line-clamp-1">
							<a href="" className="text-white cursor-pointer ">
								{film.name}
							</a>
						</h2>
						<p className="text-xs text-gray-500">{film.origin_name}</p>
						{isHover == film.slug && <HoverComponent film={film} />}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};
export default TopFilmComponents;
