import AddQuiz from "@/components/Add_Quiz_Form/AddQuiz";
import Title from "@/components/Title/Title";
import Head from "next/head";
import { FC } from "react";

interface CreateProps {}

const create: FC<CreateProps> = ({}) => {
  return (
    <>
      <Head>
        <title>Create Quiz</title>
      </Head>
      <Title
        text="Create your own quiz!"
        secondaryText="Fill out the below form to add your own personal quiz"
        buttonVisible="hidden"
      />
      <AddQuiz />
    </>
  );
};

export default create;
