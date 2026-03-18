# builtbyronak.com — Portfolio

React 19 + Vite + Tailwind CSS + shadcn/ui portfolio site.

---

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## Project structure

```
src/
├── constants.js          ← ✏️  EDIT THIS FILE to update all content
├── main.jsx              ← entry point
├── App.jsx               ← root component
├── index.css             ← global styles + Tailwind
│
├── lib/
│   ├── utils.js          ← cn() helper for shadcn
│   └── useReveal.js      ← scroll animation hook
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ui/               ← shadcn components
│       ├── button.jsx
│       ├── badge.jsx
│       ├── card.jsx
│       └── separator.jsx
│
└── sections/
    ├── Hero.jsx
    ├── Services.jsx
    ├── Work.jsx
    ├── Projects.jsx
    ├── Trust.jsx
    └── Contact.jsx
```

---

## How to update content

**Everything lives in `src/constants.js`** — you never need to touch any other file for content changes.

### Update your personal info
```js
export const PERSONAL = {
  name:    'Ronak Lalwani',
  email:   'hello@builtbyronak.com',
  domain:  'builtbyronak.com',
  available: true,   // set false to hide the green badge
  photo:   '/images/ronak.jpg',  // add your photo here
  ...
}
```

### Add a project image
1. Drop your screenshot into `public/images/yourproject.png`
2. In `constants.js` → `PROJECTS`, set `image: '/images/yourproject.png'`
3. The mock UI placeholder is replaced automatically

### Add a testimonial
In `constants.js` → `TESTIMONIALS`, uncomment and fill in:
```js
export const TESTIMONIALS = [
  {
    quote: 'Ronak delivered the landing page in under 48 hours.',
    name:  'Jane Smith',
    role:  'Founder, Acme Co',
  },
]
```
The testimonials section is hidden when the array is empty and shows automatically when you add entries.

### Add a service
In `constants.js` → `SERVICES`, add a new object:
```js
{
  icon:        'Code',   // any Lucide icon name
  name:        'Custom React App',
  description: 'Full custom React application...',
  price:       'From $1,000',
  turnaround:  '2–4 weeks',
}
```
Available icons: `Zap`, `Rocket`, `Gauge`, `Wrench`, `LayoutDashboard`, `Code`, `Globe`, `Layers`
(add more in `src/sections/Services.jsx` → `ICON_MAP`)

### Toggle availability
```js
export const PERSONAL = {
  available: false,  // hides the green "Available" badge in hero
}
```

---

## Adding the /reckord page

1. Create `src/pages/Reckord.jsx`
2. Add a route in `App.jsx` using React Router:

```bash
npm install react-router-dom
```

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Reckord from './pages/Reckord'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"        element={<Portfolio />} />
        <Route path="/reckord" element={<Reckord />} />
      </Routes>
    </BrowserRouter>
  )
}
```

---

## Deploy to Vercel

```bash
# Push to GitHub, then:
# 1. Go to vercel.com → New Project → import your repo
# 2. Framework preset: Vite
# 3. Add custom domain: builtbyronak.com
# Done — auto-deploys on every git push
```

---

## Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 6 | Build tool |
| Tailwind CSS | 3 | Styling |
| shadcn/ui | — | UI components |
| Lucide React | 0.469 | Icons |
| Geist | — | Font (Vercel's) |
