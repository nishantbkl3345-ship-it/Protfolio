# Customization Guide

## Quick Customization Checklist

### 1. Personal Information

**Hero Section** (`components/Hero.tsx`):
- Line 13: Change name
- Line 22: Update tagline
- Line 29: Modify description

**About Section** (`components/About.tsx`):
- Line 23: Update bio text

**Contact Section** (`components/Contact.tsx`):
- Lines 11-27: Update email, LinkedIn, and GitHub links

**Footer** (`components/Footer.tsx`):
- Lines 13-35: Update social links

### 2. Skills

Edit `components/Skills.tsx`:
- Lines 7-32: Modify the `skillCategories` array
- Add/remove categories and skills as needed

### 3. Projects

Edit `components/Projects.tsx`:
- Lines 8-46: Update `featuredProjects` array
- Lines 48-68: Update `otherProjects` array

Each project should have:
```typescript
{
  title: 'Project Name',
  description: 'Brief description',
  features: ['Feature 1', 'Feature 2'], // Only for featured
  tech: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  featured: true // Only for featured projects
}
```

### 4. Colors & Theme

Edit `tailwind.config.ts` and `app/globals.css`:

**Background Colors**:
- `globals.css` line 2: `--background: #0a0a0a;`
- Change to any dark color

**Accent Colors**:
- Current: Blue (#3b82f6) and Purple (#9333ea)
- Find/replace these hex codes throughout the project

**Gradient Customization**:
```css
/* In globals.css */
.gradient-text {
  background: linear-gradient(135deg, #YOUR_COLOR_1, #YOUR_COLOR_2);
}
```

### 5. Fonts

Edit `app/layout.tsx`:
- Lines 4-11: Change font imports
- Available Google Fonts: https://fonts.google.com

Example:
```typescript
import { Poppins, Roboto_Mono } from "next/font/google";

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
});
```

### 6. Animations

**Speed**:
- Find `duration:` values in component files
- Increase for slower, decrease for faster

**Disable Animations**:
- Remove `motion.` components
- Replace with regular `<div>` elements

### 7. Sections

**Add New Section**:
1. Create `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add between existing sections

**Remove Section**:
1. Open `app/page.tsx`
2. Delete the import and component

**Reorder Sections**:
- Rearrange component order in `app/page.tsx`

### 8. SEO & Metadata

Edit `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your description",
};
```

### 9. Favicon

Replace these files in `app/`:
- `favicon.ico`
- `apple-icon.png` (optional)
- `icon.png` (optional)

### 10. GitHub Contribution Graph

Edit `components/GitHub.tsx`:
- Lines 54-71: Modify the contribution grid
- Change `Array.from({ length: 84 })` to adjust grid size
- Modify intensity logic for different patterns

## Advanced Customization

### Add Blog Section
1. Install MDX: `npm install @next/mdx`
2. Create `app/blog/` directory
3. Add blog posts as MDX files

### Add Contact Form
1. Install form library: `npm install react-hook-form`
2. Set up backend (Formspree, EmailJS, or custom API)
3. Add form component to Contact section

### Add Dark/Light Mode Toggle
1. Install next-themes: `npm install next-themes`
2. Create theme provider
3. Add toggle button in navigation

### Analytics
```bash
# Google Analytics
npm install @next/third-parties

# Or Vercel Analytics (if deploying to Vercel)
npm install @vercel/analytics
```

## Troubleshooting

**Build Errors**:
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

**Styling Issues**:
```bash
# Rebuild Tailwind
npm run dev
```

**Type Errors**:
```bash
# Check TypeScript
npx tsc --noEmit
```

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion/
