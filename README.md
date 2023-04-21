# CarbonCode NextJS Tech Test

## Installation

To install and run the Quiz application, follow the below steps:

1. Clone the repository:
2. Install dependencies: 'npm install'
3. Run the application: 'npm run dev'

## Usage

Once everything is up and running, you should be redirected to http://localhost:3000 which is the home route.

## Tech Stack

- Next.js
- React Query
- Prisma
- SQLite
- TailwindCSS

### Features

The following features have been implemented:

- The home page includes a list of quizzes that are available to use
  - Quizzes are fetched from API using React Query. Data will be cached to keep the application optimized
- 'Add new quiz' button that re-directs to the 'create' page. You will be able to fill out a form

  - Quiz title, description and 3 answers/questions will be required.
  - Once submitted, you will be re-directed to the home page
  - The quiz cards on the home page will re-direct to the quiz page, specific to the quiz you have clicked on

- Start button to start the quiz
  - 3 questions will be presented (1 at a time)
  - Yes or No answers required
  - Result is presented at the end

### API Endpoints

- /api/quizzes/createQuiz -> Endpoint for enabling user to create a new quiz
- /api/quizzes/allQuizzes -> Endpoint for fetching all quizzes on the database
- /api/quizzes/[...quizId] -> Endpoint that catches all paths. quizId is received through query params

### Routes

- /create -> Page that includes functionality to add new quiz
- / -> Home page that presents all quizzes available
- /[...slug] Quiz page that dynamically renders depending on quizId
