# ICSpark Web Development Classroom - Spring 2026

A modern React-based classroom website for the ICSpark Web Development program.

![ICSpark Logo](react/public/logo_rocket.svg)

## Live Site

**Visit the site:** [https://icspark-uhm.github.io/Spring-2026/](https://icspark-uhm.github.io/Spring-2026/)

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)
- [Deployment](#deployment)
- [Customization](#customization)
- [Troubleshooting](#troubleshooting)

---

## About

This is the official classroom website for ICSpark's Spring 2026 Web Development course. The site is built with:

- **React** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **GitHub Pages** - Free hosting

---

## Features

- **14-Week Course Module** - Interactive week cards with detailed information
- **Home Page** - Course updates and quick navigation
- **Syllabus Page** - Course policies, grading, and rules
- **Showcase Page** - Student project gallery
- ℹ**About Page** - Team and contact information


---

## Getting Started

### Prerequisites

Before you begin, make sure you have installed:

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **Git** 


### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/icspark-uhm/Spring-2026.git
   cd Spring-2026/react
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   ```
   http://localhost:5173
   ```


---

## Project Structure

```
react/
├── public/                 # Static files
│   ├── imgs/              # Images
│   │   ├── main_page.png
│   │   ├── classroom.jpg
│   │   └── logo_rocket.svg
│   └── ...
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.tsx     # Navigation & hero
│   │   └── Footer.tsx     # Footer
│   ├── pages/             # Page components
│   │   ├── Home.tsx       # Home page
│   │   ├── Class.tsx      # Week modules
│   │   ├── About.tsx      # About page
│   │   ├── Syllabus.tsx   # Course syllabus
│   │   └── Showcase.tsx   # Student projects
│   ├── App.tsx            # Main app & routing
│   ├── App.css            # Global styles
│   ├── main.tsx           # Entry point
│   └── index.css          # Base CSS
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript config
```

---

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to GitHub Pages
npm run deploy

# Run linter
npm run lint
```

### Making Changes

1. **Edit files in `src/`**
    - Components: `src/components/`
    - Pages: `src/pages/`
    - Styles: `src/App.css`

2. **Hot reload is enabled**
    - Changes appear instantly in the browser
    - No need to refresh!

3. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

---

## Deployment

### Deploy to GitHub Pages

1. **Make sure your changes are committed:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Deploy:**
   ```bash
   cd react
   npm run build
   npm run deploy
   ```

3. **Wait 1-2 minutes**, then visit:
   ```
   https://icspark-uhm.github.io/Spring-2026/
   ```

### How It Works

- `npm run deploy` builds your app and pushes to the `gh-pages` branch
- GitHub Pages automatically serves from that branch
- Your main branch stays clean with just source code

### GitHub Pages Settings

Make sure your repository settings are configured:

1. Go to: **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages**
4. Folder: **/ (root)**
5. Click **Save**

---

## Customization

### Update Course Content

#### **Week Information** (`src/pages/Class.tsx`)

Edit the `weeksData` array:
```typescript
const weeksData: WeekData[] = [
  { 
    week: 1, 
    title: 'Week 1', 
    desc: 'Your description here',
    project: 'https://github.com/link-to-project',
    zoom: 'https://zoom-recording-link'
  },
  // ... more weeks
];
```

#### **Home Page Updates** (`src/pages/Home.tsx`)

Update the announcement:
```tsx
<div className="updates-text">
  Your announcement here!
</div>
```

#### **Syllabus** (`src/pages/Syllabus.tsx`)

Edit policies, grading, and rules to match your course.

### Update Styling

#### **Colors** (`src/App.css`)

Change the CSS variables at the top:
```css
:root {
  --bg: #0f1114;           /* Dark background */
  --accent: #f5c437;       /* Yellow accent */
  --card-bg: #ffffff;      /* White cards */
  --muted-bg: #f3efec;     /* Light beige background */
  --text: #2c2c2c;         /* Dark text */
}
```

#### **Layout**

Adjust spacing, card sizes, and other styles in `src/App.css`.

### Add New Pages

1. **Create page component:**
   ```tsx
   // src/pages/NewPage.tsx
   function NewPage() {
     return (
       <main className="content">
         <h1>New Page</h1>
       </main>
     );
   }
   export default NewPage;
   ```

2. **Add route in `App.tsx`:**
   ```tsx
   import NewPage from './pages/NewPage';
   
   <Routes>
     {/* ... existing routes */}
     <Route path="/newpage" element={<NewPage />} />
   </Routes>
   ```

3. **Add navigation link in `Header.tsx`** (optional):
   ```tsx
   <li><Link to="/newpage">New Page</Link></li>
   ```

---

## Troubleshooting

### Site shows blank page after deployment

**Solution:**
1. Check `vite.config.ts` - make sure `base` is set correctly:
   ```typescript
   base: '/Spring-2026/',
   ```
2. Hard refresh the browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
3. Check browser console (F12) for errors

### Images don't load

**Solution:**
- Images must be in `react/public/imgs/`
- Use absolute paths: `/imgs/image.png` NOT `./imgs/image.png`
- After adding new images, rebuild and deploy

### `npm run dev` shows errors

**Solution:**
1. Delete `node_modules/` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```
2. Make sure you're in the `react/` folder
3. Make sure Node.js version is 18+: `node --version`

### Changes don't appear after deploy

**Solution:**
1. Clear browser cache
2. Hard refresh: `Ctrl + Shift + R`
3. Try incognito/private mode
4. Add `?v=1` to URL to bypass cache

### TypeScript errors

**Solution:**
- Most TypeScript errors won't break the app
- Fix by adding proper types to your code
- Or rename `.tsx` files to `.jsx` if you want to avoid TypeScript

---

## Learn More

### React Documentation
- [React Official Docs](https://react.dev/)
- [React Router](https://reactrouter.com/)

### Vite Documentation
- [Vite Guide](https://vitejs.dev/guide/)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### GitHub Pages
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## Contributing

### For Students

If you're a student in the course:
1. Fork this repository
2. Make your changes
3. Submit a pull request
4. Instructors will review and merge

### For Instructors

1. Clone the repository
2. Make changes directly to main branch
3. Deploy with `npm run deploy`


---

## ⚡ Quick Reference

### Essential Commands
```bash
# Navigate to project
cd Spring-2026/react

# Install dependencies
npm install

# Start development
npm run dev

# Deploy
npm run deploy
```

### File Locations
- **Pages:** `src/pages/`
- **Components:** `src/components/`
- **Styles:** `src/App.css`
- **Images:** `public/imgs/`

### URLs
- **Local:** `http://localhost:5173`
- **Live:** `https://icspark-uhm.github.io/Spring-2026/`
- **Repo:** `https://github.com/icspark-uhm/Spring-2026`

---

## About

This project is for educational purposes as part of the ICSpark program.


- **ICSpark** - For providing the web development curriculum
- **UH Mānoa** - For supporting the program
- **Students** - For their enthusiasm and creativity

---

## Contact

For questions or issues:
- **Email:** info@icspark.org
