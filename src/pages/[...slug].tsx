import { FC, useState } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { IndividualQuiz, QuizData, currentQuestion } from "@/types/types";
import Title from "@/components/Title/Title";
import QuestionCard from "@/components/Questions/QuestionCard";
import Head from "next/head";

//Generating all paths to enable pre-render of all slugs
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/quizzes/allQuizzes`);
  const data = await res.json();
  const paths = data.map((quiz: QuizData) => {
    return {
      params: {
        slug: [quiz.id.toString()],
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

//Static Site Generation -> Using Incremental Static Regeneration to refetch quiz data every 60 seconds.
export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.slug;
  const res = await fetch(`${process.env.BASE_URL}/api/quizzes/${id}`);

  const data = await res.json();
  return {
    props: {
      data: data,
    },
    revalidate: 60,
  };
};

const Quiz: FC<IndividualQuiz> = ({ data }) => {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState(data.questionsAndAnswers);

  //Handling current question count to manage selected questions
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [currentQuestion, setCurrentQuestion] = useState<currentQuestion[]>([
    {
      questionText: questions[questionCount].question,
      questionId: questions[questionCount].id,
      questionAnswer: questions[questionCount].answer,
    },
  ]);

  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [correctQuestionsCount, setCorrectQuestionsCount] = useState<number>(0);

  const handleStart = (): void => {
    setStarted(!started);
  };

  const handleQuiz = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value }: { value: string } = e.target;

    //Managing amount of correct answers
    if (value === currentQuestion[0].questionAnswer) {
      setCorrectQuestionsCount(correctQuestionsCount + 1);
    }

    //Exit out of function to stop errors on completion
    if (questionCount === 2) {
      setIsComplete(true);
      return;
    }

    setQuestionCount(questionCount + 1);

    setCurrentQuestion([
      {
        questionText: questions[questionCount + 1].question,
        questionId: questions[questionCount + 1].id,
        questionAnswer: questions[questionCount + 1].answer,
      },
    ]);
  };

  return (
    <>
      <Head>
        <title>{data.quiz[0].title}</title>
      </Head>
      <div className="h-screen">
        <Title
          text={`The ${data.quiz[0].title} Quiz`}
          secondaryText={data.quiz[0].quiz_description}
          startQuiz={handleStart}
          started={started}
        />
        <div className="p-5">
          {started &&
            currentQuestion.map((question) => {
              return (
                <QuestionCard
                  key={question.questionId}
                  id={question.questionId}
                  question={question.questionText}
                  handleQuiz={handleQuiz}
                  questionCount={questionCount}
                  isComplete={isComplete}
                  correctQuestionsCount={correctQuestionsCount}
                  started={started}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Quiz;
