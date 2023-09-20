"use client";
import Image from "next/image";
import { useState } from "react";

const CustomImage = ({ image, fill }) => {
  const [isLoading, setisLoading] = useState(true);
  return (
    <>
      {image ? (
        <Image
          src={image}
          className={` cursor-pointer hover:scale-110 ease-in duration-200 ${
            isLoading ? "grayscale blur-xl" : ""
          }`}
          alt="Image"
          onLoadingComplete={() => setisLoading(false)}
        />
      ) : (
        <div className="flex items-center justify-center lg:h-[400px] md:h-[200px] w-[400px]">
          <span className="text-center inline-block">Loading...</span>
        </div>
      )}
    </>
  );
};

export default CustomImage;
