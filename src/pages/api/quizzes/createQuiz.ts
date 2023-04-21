import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../../prisma/prisma";
import { FormProps } from "@/types/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { formInput }: { formInput: FormProps } = req.body;
    const { title, description, quizQuestions }: FormProps = formInput;

    //Query DB, adding quiz title & description
    const addNewQuiz = await prisma.quiz.create({
      data: {
        title: title,
        quiz_description: description,
      },
    });

    //Retrieving ID from new Quiz object
    const quiz_id: number = addNewQuiz.id;

    //Looping through questions/answers array, inputting each into DB
    quizQuestions.forEach(async (questionObj: any) => {
      await prisma.quizQuestion.create({
        data: {
          quizId: quiz_id,
          question: questionObj.question,
          answer: questionObj.answers,
        },
      });
    });
    res.status(200).json({ message: "Quiz added" });
  }
}
