"use client";
// import { useState, useEffect } from "react";
import topicJson from "@/mock/topic/mockTopic.json";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Topic = () => {
  return (
    <div className="">
      <div className="mb-[20px]">
        <h3 className="text-[28px] leading-[140%] font-[600] text-white">
          Bạn đang quan tâm gì?
        </h3>
      </div>
      <div className="grid grid-cols-7 gap-4">
        {topicJson.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1,
              y: -10,
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.12)",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-[1.2rem] pr-[40px] pl-[25px] rounded-[12px] relative top-0 cursor-pointer"
            style={{ backgroundColor: item.color }}
          >
            <div className="min-h-[110px] flex flex-col gap-[0.7rem] justify-end">
              <span className="text-[28px] text-white leading-[140%] font-[700]">
                {item.name}
              </span>
              <div className="flex gap-[10px] items-center text-white">
                <span>xem chủ đề</span>
                <FaChevronRight />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Topic;
