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
docker build -t my-app .
```

### Running the App in Docker

Run the container:
```bash
docker run -p 3000:3000 my-app
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Production Docker Setup

For production, you may want to modify the Dockerfile to use the production build:

```dockerfile
# In Dockerfile, change CMD to:
CMD npm run build && npm run start
```

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