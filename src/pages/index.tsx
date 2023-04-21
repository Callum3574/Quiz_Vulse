import Quizzes from "@/components/Quizzes/Quizzes";
import Title from "@/components/Title/Title";
import Head from "next/head";
import { FC } from "react";
import { QuizData } from "@/types/types";
import { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";

const Home: FC<NextPage> = () => {
  //useQuery fetching all quizzes from API.
  //Caching data reducing the number of requests to the API.
  const { data, isLoading, error } = useQuery<QuizData[]>(
    ["allQuizzes"],
    async () => fetch("/api/quizzes/allQuizzes").then((res) => res.json()),
    {
      //Stops re-render when user clicks on other tabs -> no redundant requests to API.
      refetchOnWindowFocus: false,
      //Cached data considered stale after 10 seconds
      staleTime: 10000,
    }
  );

  return (
    <>
      <Head>
        <title>CarbonCode NextJS Tech Test</title>
      </Head>
      <main>
        <Title
          text="Welcome to Vulse Quiz App!"
          secondaryText="Take quizzes, create quizzes, and enjoy the excitement! Start now and let the quiz frenzy begin!"
          buttonVisible="hidden"
        />
        {isLoading ? (
          <p className="md:text-4xl text-2xl text-center text-[#2D2A32]">
            Loading quizzes...
          </p>
        ) : error ? (
          <p className="md:text-4xl text-2xl text-center text-[#2D2A32]">
            Error loading quizzes. Please try again later.
          </p>
        ) : (
          <Quizzes data={data} />
        )}
      </main>
    </>
  );
};

export default Home;
