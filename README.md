# 19 Testing: Tech Quiz Test Suite

## Overview
This project is a MERN stack Tech Quiz application with comprehensive Cypress testing. Users can take a 10-question quiz and view their score. The project demonstrates robust E2E and component testing using Cypress, following all best practices and requirements for the Unit 19 Testing Challenge.

## Features
- MERN stack: React frontend, Node/Express backend, MongoDB database
- Quiz of 10 random questions
- Score display and ability to restart quiz
- Fully tested with Cypress (E2E and component)
- TypeScript throughout



## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Seed the database (from the `server` directory):
   ```bash
   npm run build && npm run seed
   ```
3. Start the app in development mode:
   ```bash
   npm run start:dev
   ```
4. Run Cypress tests:
   ```bash
   npm run test
   ```

## Directory Structure
```
Develop/
├── client/                 # React frontend
├── server/                 # Node/Express backend
├── cypress/                # Cypress tests
│   ├── component/Quiz.cy.jsx
│   ├── e2e/quiz.cy.js
│   ├── fixtures/questions.json
│   └── support/component-index.html
├── vite.config.ts
├── cypress.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Testing
- **Component Test:** `cypress/component/Quiz.cy.jsx` tests the Quiz component UI and logic.
- **E2E Test:** `cypress/e2e/quiz.cy.js` tests the full quiz flow, intercepts API, and uses fixture data.
- **Fixtures:** `cypress/fixtures/questions.json` matches backend seed data for reliable tests.

## Walkthrough Video
[Walkthrough Video Link](https://your-video-link-here)

## Notes
- All configuration files are set to project requirements (ports, proxies, scripts, etc).
- All `[data-cy=...]` selectors are present for robust Cypress testing.

---
© 2025 Christopher Lin. All Rights Reserved.
