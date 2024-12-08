# Infinite Scrolling Challenge

# Introduction

This Vite React app implements the main requirement, but also has some extra features:

- Filtering: I implemented it client-side. In a real-world scenario, I would probably use params on the API endpoint, but in this case, filtering was not supported, so I had to do it on the front end.
- Dark/Light theme
- Docker support

# Running the project

**Option 1: Dev Server**

1.  Go to the project root
2.  Run `npm i`
3.  Run `npm run dev`
4.  Open your browser and go to http://localhost:5173/

**Option 2: Docker**

1.  Go to the project root
2.  Run `docker build -t houses-feed .`
3.  Run docker run -d -p 3000:80 --name houses-feed-container houses-feed
4.  Open your browser and go to http://localhost:3000/

**Option 3: Vercel**
You can access the latest deployment of the application [here](https://house-data-infinite-scrolling.vercel.app/)

# Running tests

This project uses Vitest for testing. To run the test suite:

1.  Go to the project root
2.  Run `npm i`
3.  Run `npm run test`

Additionally, you can run `npm run test:ui` to access a web UI for viewing and interacting with the tests.

# Road to production

This brief section aims to demonstrate my understanding of what is needed to deploy an app like the one I built to production. I primarily use **AWS EKS** in my day-to-day work so I will use it as an example. However, any Kubernetes-based approach would be similar.

The first step was to create a `Dockerfile` for the app. In this case, the `Dockerfile` is fairly simple since we don't have many arguments or stages. I used it to create the production bundle for the application and serve it using Nginx. I also included some basic Nginx configuration files. If we were to handle multiple environments, we would need to extend the base configuration for each one.

Once the `Dockerfile` is created, the next step would be configuring the Helm charts to define and manage the Kubernetes resources needed to deploy the application. Helm charts allow to package of the Kubernetes manifests into reusable templates, which can be easily customized with values for different environments. Once the charts are set up, Helm can be used to deploy, upgrade, and manage the application lifecycle in Kubernetes.

Next, I would need to configure the CI/CD pipeline. I would create a `Jenkinsfile` with the necessary steps, where, for example, environment variables would be set, and the `Dockerfile` would be used to create a Docker image. The `Jenkinsfile` would then be referenced by a pipeline (e.g., CloudBees) that triggers automatically every time something is pushed to the GitHub repository.
