import { QuestionCardProps } from "@/types/types";
import Link from "next/link";
import { FC } from "react";

//Component for each question within a quiz
const QuestionCard: FC<QuestionCardProps> = ({
  question,
  hide,
  questionCount,
  isComplete,
  correctQuestionsCount,
  handleQuiz,
}) => {
  const handleEmoji = (score: number) => {
    let emoji;
    switch (score) {
      case 0:
        emoji = "😩";
        break;
      case 1:
        emoji = "😒";
        break;
      case 2:
        emoji = "😊";
        break;
      case 3:
        emoji = "🥳";
        break;
      default:
        break;
    }
    return emoji;
  };
  return (
    <div className={`flex flex-col justify-center py-10 ${hide}`}>
      <h1 className="text-center md:text-2xl text-2xl">
        Question {questionCount + 1} out of 3
      </h1>
      <div className="flex md:space-x-6 space-x-4">
        <div>
          <button
            onClick={handleQuiz}
            className={`rounded-full bg-[#8E66FF] md:w-20 md:h-20 h-14 w-14 text-black mt-6 mx-auto transition duration-500 hover:bg-[#F44E3F] border-2 border-[#2D2A32] hover:shadow-2xl border-double ${
              isComplete ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            value="no"
            disabled={isComplete}
          >
            NO
          </button>
        </div>

        <div className="flex-initial w-full relative bg-[#f2f8f9] rounded-3xl md:py-6 md:p-5 p-3 py-4 overflow-hidden shadow-2xl text-center hover:bg-[#8E66FF] hover:text-white transition duration-300 ease-in-out cursor-pointer text-[#2D2A32] mt-5 justify-center">
          <p className="md:text-xl text-lg">{question}</p>
        </div>
        <div>
          <button
            onClick={handleQuiz}
            className={`rounded-full bg-[#8E66FF] md:w-20 md:h-20 h-14 w-14 text-black mt-6 mx-auto transition duration-500 hover:bg-[#5DFDCB] border-2 border-[#2D2A32] hover:shadow-2xl border-double ${
              isComplete ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            value="yes"
            disabled={isComplete}
          >
            YES
          </button>
        </div>
      </div>
      {isComplete && (
        <div className="flex flex-col items-center">
          <h1 className="text-center md:text-2xl text-2xl mt-5">
            You scored {correctQuestionsCount} out of 3{" "}
            {handleEmoji(correctQuestionsCount)}!
          </h1>
          <Link href="/">
            <button
              className={`inline-flex items-center justify-center py-2 bg-[#2D2A32] hover:bg-black text-slate-300 text-sm font-medium rounded-md w-40 m-5`}
            >
              More Quizzes
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
