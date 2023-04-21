import { FC } from "react";
import { QuizCardProps } from "@/types/types";
import Link from "next/link";

//Component for each quiz card
const QuizCard: FC<QuizCardProps> = ({ quiz }) => {
  return (
    <Link key={quiz.id} href={`${quiz.id}`}>
      <div className="flex flex-col items-center">
        <div className="block relative bg-[#f2f8f9] rounded-lg py-5 p-5 overflow-hidden shadow-2xl text-center hover:bg-[#8E66FF] hover:text-white transition duration-300 ease-in-out cursor-pointer text-[#2D2A32] w-80 h-40 hover:scale-125">
          <h1 className="text-3xl mb-2">{quiz.title}</h1>
          <p>{quiz.quiz_description}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D2A32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow absolute top-0 right-0 mt-3 mr-3"
          >
            <path d="M14 9l6 6-6 6" />
            <path d="M4 4v7a4 4 0 0 0 4 4h11" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default QuizCard;
