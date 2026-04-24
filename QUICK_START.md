# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
cd portfolio
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Start Customizing!
See [CUSTOMIZATION.md](./CUSTOMIZATION.md) for detailed instructions.

## 📝 Quick Edits

### Change Your Name & Info
1. Open `components/Hero.tsx` - Update name and tagline
2. Open `components/About.tsx` - Update bio
3. Open `components/Contact.tsx` - Update email, LinkedIn, GitHub

### Update Projects
1. Open `components/Projects.tsx`
2. Edit the `featuredProjects` and `otherProjects` arrays
3. Add your own projects with descriptions and links

### Modify Skills
1. Open `components/Skills.tsx`
2. Edit the `skillCategories` array
3. Add/remove skills as needed

## 🎨 Change Colors

### Quick Color Change
Find and replace these hex codes throughout the project:
- Blue: `#3b82f6` → Your color
- Purple: `#9333ea` → Your color

### Files to Update
- `app/globals.css`
- `tailwind.config.ts`
- Component files (Hero, Projects, etc.)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy

### Vercel (Easiest)
1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Netlify
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📚 Documentation

- [README.md](./README.md) - Project overview
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Detailed customization guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions
- [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md) - Complete project details

## 🆘 Need Help?

### Common Issues

**Port 3000 already in use:**
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

**Build errors:**
```bash
# Clear cache
rm -rf .next
npm run build
```

**Styling not updating:**
```bash
# Restart dev server
# Press Ctrl+C, then npm run dev
```

### Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## ✨ Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **TypeScript**: Get type hints in VS Code
3. **Responsive**: Test on mobile using browser dev tools
4. **Performance**: Run Lighthouse audit in Chrome DevTools

## 🎯 Next Steps

1. ✅ Customize personal information
2. ✅ Update projects and skills
3. ✅ Change colors to match your brand
4. ✅ Test on mobile devices
5. ✅ Deploy to Vercel/Netlify
6. ✅ Add custom domain (optional)
7. ✅ Share with the world!

---

Happy coding! 🎉
