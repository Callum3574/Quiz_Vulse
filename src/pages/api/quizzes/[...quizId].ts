import { QuestionAndAnswers, QuizData } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";

//Dynamic API extended so it will catch all paths
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const { quizId }: { quizId?: any } = req.query;

    //Querying DB to find all quizzes where id matches.
    //ID accessed from query param from API call
    const quiz = await prisma.quiz.findMany({
      where: {
        id: parseInt(quizId),
      },
    });

    const currentQuizId: number = quiz[0].id;

    const questionsAndAnswers = await prisma.quizQuestion.findMany({
      where: {
        quizId: currentQuizId,
      },
    });

    //Confirming types before sending response
    const quizData: QuizData[] = quiz;
    const QuestionAndAnswerData: QuestionAndAnswers[] = questionsAndAnswers;

    res
      .status(200)
      .json({ quiz: quizData, questionsAndAnswers: QuestionAndAnswerData });
  }
}
