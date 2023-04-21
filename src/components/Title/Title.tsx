import { FC } from "react";
import { TitleProps } from "@/types/types";

const Title: FC<TitleProps> = ({
  text,
  secondaryText,
  buttonVisible,
  started,
  startQuiz,
}) => {
  return (
    <div className="flex flex-col items-center py-24 bg-gradient-to-r from-[#8E66FF] to-[#f2f2f2] p-5 shadow-2xl w-full">
      <h1 className="md:text-5xl text-4xl font-bold text-center text-[#2D2A32]">
        {text}
      </h1>
      <p className="md:text-2xl text-md font-bold text-center text-[#2D2A32] mt-4">
        {secondaryText}
      </p>
      <button
        disabled={started}
        onClick={startQuiz}
        className={`inline-flex items-center justify-center py-2 bg-[#2D2A32] hover:bg-black text-slate-300 text-sm font-medium rounded-md w-40 mt-4
        ${buttonVisible} ${started ? "cursor-not-allowed" : "cursor-pointer"}`}
      >
        START NOW
      </button>
    </div>
  );
};

export default Title;
