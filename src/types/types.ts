export interface QuizData {
  id: number;
  title: string;
  quiz_description: string;
}

export interface IndividualQuiz {
  data: {
    quiz: QuizData[];
    questionsAndAnswers: QuestionAndAnswers[];
  };
}

export interface QuestionAndAnswers {
  id: number;
  quizId: number;
  question: string;
  answer: string;
}

export interface currentQuestion {
  questionText: string;
  questionId: number;
  questionAnswer: string;
}

export interface QuizzesProps {
  data?: QuizData[];
}

export interface QuizCardProps {
  quiz: QuizData;
}

export interface FormProps {
  title: string;
  description: string;
  quizQuestions: {
    question: string;
    answers: string;
  }[];
}

export interface TitleProps {
  text: string;
  secondaryText?: string;
  buttonVisible?: string;
  started?: boolean;
  startQuiz?: () => void;
}

export interface QuestionCardProps {
  id: number;
  question: string;
  hide?: string;
  questionCount: number;
  isComplete: boolean;
  correctQuestionsCount: number;
  handleQuiz?: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
  started: boolean;
}
