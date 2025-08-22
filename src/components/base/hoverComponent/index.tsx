/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FaPlay, FaRegHeart } from 'react-icons/fa';

import { motion } from 'framer-motion';

type Props = {
	film: any;
};
const HoverComponent = ({ film }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 10 }}
			transition={{ duration: 0.2 }}
			className="absolute -top-[8px] -left-[90px] mt-2 w-[420px] h-[443px] bg-[#2F3346] text-black rounded-[8px] shadow-lg z-50"
		>
			<div className="pb-[1rem]">
				<img
					src={`https://phimapi.com/image.php?url=https://phimimg.com/${film.thumb_url}`}
					alt=""
					className="w-full h-[236px]"
				/>
			</div>
			<div className="pb-[1.5rem] px-[1.5rem] ">
				<div className="mb-4">
					<div className="text-[16px] text-white font-semibold text-shadow-2xs">{film.name}</div>
					<div className="text-[13px] text-[#FFD875] font-normal">{film.origin_name}</div>
				</div>
				<div className="flex gap-[0.6rem] mb-[1.25rem] justify-between items-stretch">
					<motion.button
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'tween', stiffness: 600, damping: 30 }}
						className="flex items-center py-[0.5rem] px-[1.2rem] gap-[0.5rem] min-h-[40px] text-[13px] rounded-[0.5rem] justify-center bg-[#FFD875] text-[#191B24] grow font-medium w-[155px] hover:opacity-95 hover:cursor-pointer "
					>
						<FaPlay />
						<p className="">xem ngay</p>
					</motion.button>
					<motion.button
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'spring', stiffness: 600, damping: 30 }}
						className="flex items-center py-[0.5rem] px-[1.2rem] gap-[0.5rem] min-h-[40px] text-[13px] rounded-[0.5rem] justify-center bg-transparent text-white border-white border-[1px] border-solid font-medium hover:opacity-95 hover:cursor-pointer "
					>
						<FaRegHeart />
						<p className="">thích</p>
					</motion.button>
					<motion.button
						whileTap={{ scale: 0.95 }}
						transition={{ type: 'spring', stiffness: 600, damping: 30 }}
						className="flex items-center py-[0.5rem] px-[1.2rem] gap-[0.5rem] min-h-[40px] text-[13px] rounded-[0.5rem] justify-center bg-transparent text-white border-white border-[1px] border-solid font-medium hover:opacity-95 hover:cursor-pointer "
					>
						<IoIosInformationCircleOutline />
						<p className="">chi tiết</p>
					</motion.button>
				</div>
				<div className="category flex items-center gap-2">
					{film.category.map((item: any) => (
						<a href="#" key={item.id} className="text-white text-[12px] ">
							{item.name}
						</a>
					))}
				</div>
			</div>
		</motion.div>
	);
};
export default HoverComponent;
