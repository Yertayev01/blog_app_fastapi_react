# Wethinky - [Work in Progress]

Full-Stack blog application made using React/TypeScript for the frontend and Python/FastAPI for the backend. Built for fun and to try out some new technologies.

## Stack

**Front:**

- React
- TypeScript/JavaScript
- TailwindCSS
- React Testing Library

**Back:**

- Python
- FastAPI
- PostgreSQL
- Oauth2

**Both:**

- Docker

## How to See Application:

- make sure you have Docker installed
- clone repo and navigate to root directory
- run `docker compose up`
- to see the frontend navigate to `localhost:3000/`
- to see the backend documentation navigate to `localhost:8000/docs`
- to spin the application down, navigate to terminal where you ran `docker compose up` and hit Ctrl+C

**Once you have see enough and want to remove from machine:**

- run `docker compose down --volumes` to delete the containers and their volumes
- delete the cloned github repository from machine

## Extra Project Information:

&emsp;&emsp; Started building this because I wanted to try out building a backend API with Python. I was having fun so I kept going and
figured I might as well make a front end and try out TailwindCSS and Typescript while i was at it. I then thought it would be great to not have to
spin up a Database, API, and React app all seperately. So I looked up solutions and decided that Docker was a great choice, so
I connected everything using Docker Compose.

&emsp;&emsp; I have been really enjoying building this application so far! These are some powerful and useful tools. I am very excited to learn more about them as I continue
building more projects with them.

## Plans for Future:

**Front:**

- Add more routes/pages. Ex: dashboard, landing page, create post, etc.

**Back:**

- More endpoints to the backend and build out more tables and relationships
- Testing
