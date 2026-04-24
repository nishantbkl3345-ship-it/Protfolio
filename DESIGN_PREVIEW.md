# Design Preview

## Visual Overview

This portfolio features a premium, dark-themed design with smooth animations and modern aesthetics.

## Color Palette

### Primary Colors
- **Background**: `#0a0a0a` (Deep Black)
- **Foreground**: `#ededed` (Off White)
- **Accent Blue**: `#3b82f6` (Electric Blue)
- **Accent Purple**: `#9333ea` (Soft Purple)

### Gradients
- **Primary Gradient**: Blue to Purple (`#3b82f6` → `#9333ea`)
- **Background Blur**: Subtle blue and purple orbs with blur effect

## Typography

### Fonts
- **Primary**: Inter (Body text, headings)
- **Secondary**: Space Grotesk (Alternative, monospace feel)

### Sizes
- **Hero Name**: 7xl-8xl (Very large)
- **Section Headings**: 4xl-5xl
- **Subheadings**: 2xl-3xl
- **Body**: lg-xl
- **Small Text**: sm-base

## Layout Sections

### 1. Hero Section
```
┌─────────────────────────────────────┐
│                                     │
│         [Animated Blur Orbs]        │
│                                     │
│            Nishant                  │
│   Full Stack Developer | AI & ML    │
│                                     │
│   I build scalable backend...       │
│                                     │
│   [View Projects]  [GitHub]         │
│                                     │
└─────────────────────────────────────┘
```
- Full viewport height
- Centered content
- Floating gradient orbs in background
- Two CTA buttons with gradient and glass effect

### 2. About Section
```
┌─────────────────────────────────────┐
│  About Me                           │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [Glass Card]                  │ │
│  │ I am Nishant from Bhiwani...  │ │
│  │                               │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```
- Single glassmorphism card
- Subtle backdrop blur
- Hover effect with border glow

### 3. Skills Section
```
┌─────────────────────────────────────┐
│  Skills & Expertise                 │
│                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ │
│  │Languages│ │Frontend│ │Backend │ │
│  │ Golang  │ │ React  │ │Node.js │ │
│  └────────┘ └────────┘ └────────┘ │
│                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ │
│  │Database│ │ AI/ML  │ │  Core  │ │
│  │ MySQL  │ │ NumPy  │ │  DSA   │ │
│  └────────┘ └────────┘ └────────┘ │
└─────────────────────────────────────┘
```
- 3-column grid (responsive)
- Glass cards with hover glow
- Gradient category titles
- Skill tags inside each card

### 4. Projects Section
```
┌─────────────────────────────────────┐
│  Featured Projects                  │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [FEATURED] SkillSprint OJT    │ │
│  │ Real-time coding platform...  │ │
│  │ • Admin portal                │ │
│  │ • Live leaderboard            │ │
│  │ [Node.js] [React] [MongoDB]   │ │
│  │ [View on GitHub →]            │ │
│  └───────────────────────────────┘ │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [FEATURED] Warehouse RL Env   │ │
│  │ Reinforcement learning...     │ │
│  └───────────────────────────────┘ │
│                                     │
│  Other Projects                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ │
│  │ Envoy  │ │ Fabric │ │ Search │ │
│  │Gateway │ │ Token  │ │ Algo   │ │
│  └────────┘ └────────┘ └────────┘ │
└─────────────────────────────────────┘
```
- Large featured project cards with blue border
- Bullet points for key features
- Tech stack tags
- GitHub links with icons
- Grid of smaller project cards

### 5. GitHub Section
```
┌─────────────────────────────────────┐
│  Open Source Contributions          │
│                                     │
│  ┌───────────────────────────────┐ │
│  │ [GitHub Icon]                 │ │
│  │ @nishantbkl3345-ship-it       │ │
│  │                               │ │
│  │ ┌─────┐ ┌─────┐ ┌─────┐      │ │
│  │ │Multi│ │CNCF │ │Back │      │ │
│  │ │ple  │ │     │ │end  │      │ │
│  │ └─────┘ └─────┘ └─────┘      │ │
│  │                               │ │
│  │ [Contribution Grid]           │ │
│  │ ▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪▪     │ │
│  │                               │ │
│  │ [View Full Profile]           │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
```
- Profile header with icon
- Stats cards in grid
- Simulated contribution graph
- CTA button to GitHub profile

### 6. Contact Section
```
┌─────────────────────────────────────┐
│  Let's Connect                      │
│                                     │
│  ┌────────┐ ┌────────┐ ┌────────┐ │
│  │ [Mail] │ │[LinkedIn│ │[GitHub]│ │
│  │ Email  │ │Connect  │ │@nish.. │ │
│  │        │ │with me  │ │        │ │
│  └────────┘ └────────┘ └────────┘ │
└─────────────────────────────────────┘
```
- 3 animated cards
- Gradient icon backgrounds
- Hover effects reveal "Connect" text
- Direct links to email, LinkedIn, GitHub

### 7. Footer
```
┌─────────────────────────────────────┐
│  Built by Nishant                   │
│  Crafted with Next.js, Tailwind...  │
│                                     │
│  [GitHub] [LinkedIn] [Email]        │
│                                     │
│  © 2026 Nishant. All rights reserved│
└─────────────────────────────────────┘
```
- Minimal design
- Social icons with hover effects
- Copyright notice

## Animation Details

### Scroll Animations
- **Fade In + Slide Up**: All sections reveal on scroll
- **Stagger Effect**: Grid items animate sequentially
- **Threshold**: Triggers 100px before viewport

### Hover Effects
- **Cards**: Lift up 2px, border glow
- **Buttons**: Shadow glow, scale slightly
- **Icons**: Rotate or scale on hover
- **Links**: Color transition

### Background Animations
- **Floating Orbs**: Pulse and scale infinitely
- **Gradient Shift**: Subtle color transitions
- **Contribution Grid**: Staggered fade-in

## Responsive Breakpoints

### Mobile (< 640px)
- Single column layout
- Larger touch targets
- Stacked buttons
- Reduced font sizes

### Tablet (640px - 1024px)
- 2-column grids
- Medium spacing
- Adjusted typography

### Desktop (> 1024px)
- 3-column grids
- Full spacing
- Large typography
- Hover effects enabled

## Glassmorphism Effect

```css
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.05);
```

Applied to:
- All cards
- Project containers
- Skill boxes
- Contact cards

## Accessibility Features

- Semantic HTML5 elements
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators
- Sufficient color contrast (WCAG AA)
- Alt text for icons (via aria-label)

## Performance Optimizations

- Static site generation (SSG)
- Optimized fonts with next/font
- Lazy loading for animations
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind (purged unused styles)
- GPU-accelerated animations

## Browser Compatibility

✅ Chrome/Edge (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Mobile browsers

## Design Inspiration

- **Vercel**: Clean, minimal, dark theme
- **Linear**: Smooth animations, glassmorphism
- **Stripe**: Professional, modern, gradient accents

---

This design balances aesthetics with functionality, creating a professional portfolio that stands out while remaining accessible and performant.
