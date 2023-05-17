# NestReact

This is a monorepo for my project, which includes a NestJS backend, a ReactJS frontend, and shared code between them. It uses [Turborepo](https://turborepo.org/) to manage the monorepo.

## Structure

The monorepo is structured as follows:
```
├── apps
│   ├── api
│   └── client
├── package.json
├── .env
└── turbo.json
```
Each package in the `apps` directory is a separate npm package. 
The `api` package is a `NestJS` app, the `client` package is a `ReactJS` app.

## Getting Started
To get started with development:

### Install Dependencies
```
npm install
```

### Run in Development mode
1. copy & rename `.env.sample` to `.env` and update environmental variables
2. ```
   npm run dev
   ```

## Building
To build all packages:
```
npm run build
```
This will run the build task for all packages in the monorepo.

## Testing
To run tests for all packages:
```
npm run test
```
This will run the test task for all packages in the monorepo.
