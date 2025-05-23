# Luxoria - E-Commerce Store

A modern e-commerce application built with Next.js 15.

## Deployment to Vercel

### Prerequisites
- A [Vercel account](https://vercel.com/signup)
- [Git](https://git-scm.com/downloads) installed on your computer
- [GitHub account](https://github.com/join) (recommended)

### Option 1: Deploy from GitHub

1. **Push your code to GitHub**
   - Create a new repository on GitHub
   - Push your local code to the repository
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Configure the project:
     - Framework Preset: Next.js
     - Root Directory: ./
   - In the "Environment Variables" section, add all variables from your `.env.local` file
   - Click "Deploy"

### Option 2: Deploy using Vercel CLI

1. **Install Vercel CLI**
   ```
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```
   vercel login
   ```

3. **Deploy the Project**
   ```
   vercel
   ```
   - Follow the prompts to configure your project
   - When asked about environment variables, say yes and add all variables from your `.env.local` file

## Environment Variables

Make sure to add these environment variables in Vercel:

- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- `NEXT_PUBLIC_USE_MOCK_SERVICES`

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```
# Luxoria
