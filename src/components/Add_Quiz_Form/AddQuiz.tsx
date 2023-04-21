import { FC, useState } from "react";
import { FormProps } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface AddQuizProps {}

const AddQuiz: FC<AddQuizProps> = ({}): React.ReactElement => {
  //Initialize router for redirect to other routes
  const router = useRouter();

  const initialFormState: FormProps = {
    title: "",
    description: "",
    quizQuestions: [
      {
        question: "",
        answers: "",
      },
      {
        question: "",
        answers: "",
      },
      {
        question: "",
        answers: "",
      },
    ],
  };
  const [formInput, setFormInput] = useState<FormProps>(initialFormState);

  const handleTitleAndDescriptionInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value }: { name: string; value: string } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleQuestions = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const formData: FormProps = { ...formInput };
    formData.quizQuestions[parseInt(e.target.name)].question = e.target.value;
    setFormInput(formData);
  };

  const handleAnswers = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const formData: FormProps = { ...formInput };
    formData.quizQuestions[parseInt(e.target.name)].answers = e.target.value;
  };

  //Mutation to fetch API endpoint to add new quiz to DB.
  const mutation = useMutation({
    mutationFn: (e: React.FormEvent): Promise<Response> => {
      e.preventDefault();
      return fetch("./api/quizzes/createQuiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formInput }),
      });
    },
  });

  //Using isSuccess from mutation object to redirect to home page
  if (mutation.isSuccess) {
    router.push("/");
  }
  return (
    <div className="flex flex-col md:max-w-5xl max-w-4xl border-black lg:mt-10 lg:mb-10 mx-auto shadow-xl shadow-[#8E66FF] bg-[#2D2A32] lg:rounded-2xl p-5">
      <h1 className="text-center md:text-3xl text-xl">
        Please complete the form below to create your own personalized quiz!
      </h1>
      <hr className="mt-5" />
      <form onSubmit={mutation.mutate} className="flex justify-center p-5">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-lg">
              {" "}
              What is the name of your quiz?
            </span>
          </label>
          <input
            required
            type="text"
            name="title"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={handleTitleAndDescriptionInput}
          />
          <label className="label">
            <span className="label-text text-lg">
              What is the description of your quiz?
            </span>
          </label>
          <input
            required
            type="text"
            name="description"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={handleTitleAndDescriptionInput}
          />
          <hr className="mt-5" />

          {formInput.quizQuestions.map((question, i) => {
            return (
              <div
                className="flex form-control w-full max-w-xs space-y-2"
                key={i}
              >
                <label className="label">
                  <span className="label-text text-lg">
                    Please provide question number {i + 1}
                  </span>
                </label>
                <input
                  required
                  type="text"
                  name={`${i}`}
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  onChange={handleQuestions}
                />
                <select
                  required
                  className="select select-bordered w-full max-w-xs"
                  name={`${i}`}
                  onChange={handleAnswers}
                >
                  <option disabled defaultValue={"yes"}>
                    Correct answer?
                  </option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
                <hr className="mt-5" />
              </div>
            );
          })}
          <div className="flex space-x-4 mt-5">
            <button
              disabled={mutation.isLoading}
              type="submit"
              className={`inline-flex items-center justify-center py-2 bg-[#5DFDCB] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md w-40 ${
                mutation.isLoading ? "cursor-wait" : "cursor-pointer"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Submit
            </button>
            <button
              type="reset"
              className="inline-flex items-center justify-center py-2 bg-[#F44E3F] hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md w-40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 mr-2"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddQuiz;
