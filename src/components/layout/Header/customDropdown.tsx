import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React from "react";

interface CustomDropdownProps {
  items: Array<{ _id: string; name: string; slug: string }>;
  height?: string;
  width?: string;
  bgColor?: string;
  trigger?: React.ReactNode;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  items,
  height,
  width,
  bgColor,
  trigger,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent
        style={{ height, width, background: bgColor, overflowY: "auto" }}
      >
        <div className="grid grid-cols-3 gap-x-3 gap-y-2 px-8 py-6">
          {items.map((item) => (
            <Link href={`/category/${item.slug}`} key={item._id}>
              <DropdownMenuItem
                key={item._id}
                className="whitespace-nowrap w-[140px] text-white hover:text-[#FFD875] px-[0.8rem] py-[0.2rem] cursor-pointer leading-[32px] "
              >
                {item.name}
              </DropdownMenuItem>
            </Link>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;
