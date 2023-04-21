import { QuizData } from "@/types/types";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";

//Returning all quizzes
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<QuizData[]>
) {
  if (req.method === "GET") {
    const quizzes: QuizData[] = await prisma.quiz.findMany();
    res.status(200).json(quizzes);
  }
}
