# JSON Schema Validator
This is an application intended to demonstrate the hosting of a serverless Python backend and serving a React frontend, which makes requests to the backend, on AWS.

## Dependencies
- SAM CLI
- npm
- Docker (to run API locally, and to build SAM application for deployment)

## Running locally
### Backend (in `backend` directory)
1. With Docker running, run `sam build --use-container` to build the Lambda with its dependencies to `.aws-sam`. It will also pull the runtime image from the container registry - you can speed up the build in the future by skipping this step by appending the `--skip-pull-image` flag.
2. Start the API locally with `sam local start-api -p 3001`. Note we're using 3001 as we're intending to use port 3000 for the frontend locally.
3. You can test the API by POSTing a valid request to `http://localhost:3001/` (refer to the Lambda code)

### Frontend (in `frontend` directory)
1. Create an `.env` file with `REACT_APP_BASE_URL_LOCAL=http://localhost:3001` as the content. When we run start the React application locally, the `NODE_ENV` is `development`, which sets the base URL for requests made by the frontend to `REACT_APP_BASE_URL_LOCAL` (see `src/services/config.js`).
2. Install the dependencies into `node_modules` with `npm install`
2. Run `npm start app` to start the application on port 3000 (`http://localhost:3000`). Check the frontend succesfully sends the POST request to the local API by validating the default payload against default schema.
