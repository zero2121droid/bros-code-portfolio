# Bros Code Portfolio - Development Instructions

## Project Overview
This is a portfolio website for **Bros Code** company. The project uses Next.js with TypeScript, Tailwind CSS, and will include shadcn/ui components and Lottie animations.

## Current Status
✅ **Completed:**
- Next.js project scaffolded with TypeScript
- Tailwind CSS configured
- ESLint setup
- App Router structure with src/ directory
- Basic project structure created

## Next Steps (TODO List)
The following tasks need to be completed:

### 1. 🎨 Add shadcn/ui Components
- Install and configure shadcn/ui
- Set up component library for the portfolio

### 2. 📦 Install Additional Dependencies
```bash
npm install framer-motion lottie-react @react-spring/web lucide-react
```

### 3. 🎬 Add Lottie Animations
- Set up Lottie animation support
- Create animated components for:
  - Hero section coding animations
  - Loading animations
  - Hover effects on project cards
  - Scroll-triggered reveals

### 4. 🏗️ Build Portfolio Sections
Create the following components/sections:

#### **Hero Section**
- Company logo integration (Bros Code logo attached in original chat)
- Animated intro with Lottie coding animations
- Call-to-action buttons
- Blue gradient theme based on logo colors

#### **Services/Expertise Section**
- What Bros Code specializes in
- Interactive service cards
- Skills showcase

#### **Portfolio/Projects Gallery**
- Project showcase with interactive cards
- Image galleries
- Technology tags
- Case studies

#### **About Section**
- Company story
- Team information
- Values and mission

#### **Contact/CTA Section**
- Contact form
- Social links
- Getting started CTA

### 5. 🎨 Design System
- Extract brand colors from the Bros Code logo (blue gradients)
- Create consistent typography
- Responsive design for all devices
- Smooth animations and transitions

### 6. 🚀 Performance Optimization
- Next.js image optimization
- Static generation where appropriate
- SEO optimization for portfolio visibility

## Brand Assets
- **Logo:** Bros Code logo (blue gradient design, attached in original conversation)
- **Color Scheme:** Blue gradients as primary brand colors
- **Style:** Modern, professional, developer-focused aesthetic

## Technology Stack
- **Framework:** Next.js 15+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Animations:** Lottie + Framer Motion
- **Icons:** Lucide React

## Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

## File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx (main portfolio page)
│   └── globals.css
├── components/
│   ├── ui/ (shadcn/ui components)
│   ├── sections/ (portfolio sections)
│   └── animations/ (Lottie components)
├── lib/
│   └── utils.ts
└── assets/
    ├── animations/ (Lottie JSON files)
    └── images/
```

## Key Instructions for Next Developer
1. **Start by setting up shadcn/ui** - This is the foundation for the component system
2. **Install Lottie dependencies** - Essential for the animated experience
3. **Create reusable components** - Build a solid component library
4. **Focus on responsive design** - Mobile-first approach
5. **Integrate the Bros Code branding** - Use the logo colors and style consistently
6. **Performance is key** - This is a portfolio that needs to impress

## Original Requirements
- Modern portfolio app for Bros Code company
- React/Next.js (Next.js chosen for SEO and performance)
- Tailwind CSS + shadcn/ui for styling
- Lottie animations for engaging interactions
- Professional developer-focused design
- Responsive and fast-loading

---
*Created: October 7, 2025*
*Status: Ready for development continuation*