import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_40px_#18cef2] transition-all duration-300">
      {/* Image */}
      <div
        className="h-64 md:h-80 relative rounded-xl overflow-hidden"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center
                  bg-black/70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 space-x-4"
        >
          <Link
            href={gitUrl}
            target="_blank"
            className="h-16 w-16 md:h-20 md:w-20 border-2 rounded-full flex items-center justify-center border-[#18cef2] 
             hover:border-[#38bdf8] transition-colors duration-300 relative overflow-hidden"
          >
            <CodeBracketIcon
              className="h-12 w-12 md:h-14 md:w-14 text-[#18cef2] group-hover:text-[#38bdf8] 
               transition duration-300 transform group-hover:scale-110 group-active:scale-95"
            />
            <span className="absolute inset-0 rounded-full bg-[#38bdf8]/20 opacity-0 group-hover:opacity-50 blur-lg transition duration-300"></span>
          </Link>

          <Link
            href={previewUrl}
            target="_blank"
            className="h-16 w-16 md:h-20 md:w-20 border-2 rounded-full flex items-center justify-center border-[#18cef2] 
             hover:border-[#38bdf8] transition-colors duration-300 relative overflow-hidden"
          >
            <EyeIcon
              className="h-12 w-12 md:h-14 md:w-14 text-[#18cef2] group-hover:text-[#38bdf8] 
               transition duration-300 transform group-hover:scale-110 group-active:scale-95"
            />
            <span className="absolute inset-0 rounded-full bg-[#38bdf8]/20 opacity-0 group-hover:opacity-50 blur-lg transition duration-300"></span>
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="bg-[#0a0c14] text-white rounded-b-xl mt-3 py-6 px-6 border-t border-[#18cef2]">
        <h5 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-2 text-[#38bdf8]">
          {title}
        </h5>
        <p className="text-[#94a3b8] text-lg sm:text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
