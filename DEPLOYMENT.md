# Deployment Guide

## Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

Your site will be live in minutes with automatic HTTPS and global CDN.

## Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

## Deploy to Other Platforms

### Build for production:
```bash
npm run build
```

### Start production server:
```bash
npm start
```

The app will run on port 3000 by default.

## Environment Variables

If you need to add environment variables:
1. Copy `.env.local.example` to `.env.local`
2. Add your variables
3. In production, add them through your hosting platform's dashboard

## Custom Domain

After deployment, you can add a custom domain through your hosting platform:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management

## Performance Tips

- Images are automatically optimized by Next.js
- The site uses static generation for maximum performance
- All animations are GPU-accelerated
- Fonts are optimized with next/font

## Monitoring

Consider adding:
- Vercel Analytics (built-in on Vercel)
- Google Analytics
- Plausible Analytics (privacy-friendly)
