# Tech Quiz – Cypress Testing

_A MERN stack Tech Quiz application enhanced with Cypress component and end-to-end testing._

![MIT License](https://img.shields.io/badge/license-MIT-green)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-brightgreen)
![React](https://img.shields.io/badge/React-18+-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![Student Project](https://img.shields.io/badge/student_project-s_heim-yellow)

---

## Description

This project demonstrates how to add Cypress for both component and end-to-end (E2E) testing to a full-stack Tech Quiz app. The application allows users to take a quiz of random questions and view their score. Cypress is used to ensure the quiz component and user flows work as expected.

---

## Features

- Take a quiz with random questions
- View your score at the end of the quiz
- Restart the quiz to try again
- **Cypress component tests** for the Quiz component
- **Cypress E2E tests** for the full quiz flow

---

## Technologies Used

- **Frontend:** React, Vite, TypeScript, Bootstrap
- **Backend:** Node.js, Express.js, MongoDB
- **Testing:** Cypress (component & E2E)

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm
- MongoDB (local or cloud)

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/tech-quiz-cypress-testing.git
    cd tech-quiz-cypress-testing
    ```

2. **Install dependencies:**
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. **Set up environment variables:**
    - Copy `.env.example` to `.env` in the `server` directory and update as needed.

4. **Start the app:**
    ```bash
    npm run start:dev
    ```

---

## Cypress Testing

### Run Cypress Tests

- **Open Cypress UI:**
    ```bash
    npx cypress open
    ```
- **Run all tests from the command line:**
    ```bash
    npm run test
    ```

> Make sure the app is running before running E2E tests.

### Test Structure

- `cypress/component/Quiz.tsx` – Cypress component tests for the Quiz component
- `cypress/e2e/quiz.cy.ts` – Cypress end-to-end tests for the quiz flow
- `cypress/fixtures/questions.json` – Mock data for testing

---

## Usage

1. Start the app as described above.
2. Visit [http://localhost:3001](http://localhost:3001) in your browser.
3. Click "Start Quiz" to begin.
4. Answer the questions and view your score.
5. Click "Take New Quiz" to restart.

---

## License

This project is licensed under the [MIT License](./LICENSE.txt).

---

## Author

Created by Sharon Heim.

---

© 2025 Tech Quiz Project