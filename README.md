# Next.js Sample App

A sample Next.js application built with TypeScript and Tailwind CSS.

## Prerequisites

- Node.js 18 or later
- npm or yarn
- Docker (optional, for containerized deployment)

## Local Development

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Build the application:
```bash
npm run build
```

Start the production server:
```bash
npm run start
```

## Docker

### Building the Docker Image

Build the Docker image:
```bash
docker build -t nextjs-sample .
```

### Running the App in Docker

Run the container:
```bash
docker run -p 3000:3000 nextjs-sample
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Push docker image to AWS

instructions and helpful commands can be in the aws web ui under "view push commands" button



Retrieve an authentication token and authenticate your Docker client to your registry

e.g.

```bash
aws ecr get-login-password --region eu-west-2 | docker login --username AWS --password-stdin 055706347965.dkr.ecr.eu-west-2.amazonaws.com
```

build the image

```bash
docker build -t nextjs-sample .
```

tag the image

```bash
docker tag nextjs-sample:latest {REPO_LOCATION}
```

e.g.

```bash
docker tag nextjs-sample:latest 055706347965.dkr.ecr.eu-west-2.amazonaws.com/njs-default-ecr-repository:latest
```


push the image to the ecr repository

```bash
docker push {REPO_LOCATION}
```

e.g.

```bash
docker push 055706347965.dkr.ecr.eu-west-2.amazonaws.com/njs-default-ecr-repository:latest
```


access the next js instance via the the load balancer

e.g.
http://njs-default-frontend-1948790234.eu-west-2.elb.amazonaws.com/

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Technologies

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- ESLint