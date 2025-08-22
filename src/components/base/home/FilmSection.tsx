import { FaAngleRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
/* eslint-disable @next/next/no-img-element */
type FilmItems = {
	name: string;
	origin_name: string;
	thumb_url: string;
};

type Props = {
	title: string;
	gradient: string;
	films: FilmItems[];
};

const FilmSection = ({ title, gradient, films }: Props) => {
	const uniqueId = title.replace(/\s+/g, '-').toLowerCase();

	return (
		<AnimatePresence mode="wait">
			<div className="flex justify-between items-center gap-[1.2rem] ">
				<div className="intro min-w-[200px] flex flex-col gap-[1.5rem] pr-[1.5rem] pl-[0.5rem]">
					<div
						style={{ background: gradient }}
						className="font-[700] !bg-clip-text text-transparent text-[28px] leading-[130%]"
					>
						{title}
					</div>
					<div className="flex items-center gap-[0.5rem] text-white cursor-pointer hover:text-[#FFD875]">
						<span className="block leading-[140%] text-[14px]">xem toàn bộ</span>
						<FaAngleRight />
					</div>
				</div>
				<div className="relative max-w-[1520px] flex-1 ">
					<motion.button
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 600, damping: 30 }}
						className={`swiper-button-prev-${uniqueId} absolute left-[-16px] top-[34%] -translate-y-1/2 z-10 w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center text-black hover:bg-[#FFD875] hover:cursor-pointer  transition`}
						style={{ outline: 'none', border: 'none' }}
					>
						<FaAngleRight className="rotate-180" />
					</motion.button>
					<motion.button
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 600, damping: 30 }}
						className={`swiper-button-next-${uniqueId} absolute right-0 top-[34%] -translate-y-1/2 z-10 w-10 h-10 bg-[#fff] rounded-full flex items-center justify-center text-black hover:bg-[#FFD875] hover:cursor-pointer transition`}
						style={{ outline: 'none', border: 'none' }}
					>
						<FaAngleRight />
					</motion.button>
					<div className="listfilm max-w-[100%] overflow-x-auto ">
						<Swiper
							modules={[Navigation]}
							navigation={{
								prevEl: `.swiper-button-prev-${uniqueId}`,
								nextEl: `.swiper-button-next-${uniqueId}`,
							}}
							spaceBetween={16}
							slidesOffsetBefore={0}
							slidesOffsetAfter={0}
							slidesPerView={'auto'}
							style={{ touchAction: 'pan-y' }}
							className="flex !gap-[1rem] cursor-pointer"
						>
							{films?.map((item, index) => (
								<SwiperSlide
									key={index}
									style={{ width: 288.4 }}
									className="h-full !flex flex-col gap-[1rem]"
								>
									<div className="rounded-[8px] overflow-hidden">
										<img
											src={`https://phimapi.com/image.php?url=https://phimimg.com/${item.thumb_url}`}
											alt="anh phim"
											className="w-full h-[160px] object-cover"
										/>
									</div>
									<div className="px-4 py-3">
										<h4 className="font-[500] leading-[150%]">
											<a className="no-underline text-white cursor-pointer line-clamp-1" href="#">
												{item.name}
											</a>
										</h4>
										<h4 className="font-[500] leading-[150%]">
											<a
												className="no-underline text-[#aaa] text-[0.9rem] cursor-pointer line-clamp-1"
												href="#"
											>
												{item.origin_name}
											</a>
										</h4>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
		</AnimatePresence>
	);
};
export default FilmSection;
