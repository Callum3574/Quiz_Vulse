import { FC } from "react";
import { QuizzesProps } from "@/types/types";
import QuizCard from "../Quiz_cards/QuizCard";

const Quizzes: FC<QuizzesProps> = ({ data }) => {
  if (!data) return <h1>Loading...</h1>;
  return (
    <div className="flex flex-col items-center p-2">
      <h1 className="md:text-4xl text-3xl font-bold text-center text-[#2D2A32] p-5">
        Browse Available Quizzes!
      </h1>
      <div className="flex flex-wrap justify-center md:justify-center md:mx-[-1rem] lg:gap-12 md:gap-10 gap-8 mb-10 p-3">
        {data.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
};

export default Quizzes;
