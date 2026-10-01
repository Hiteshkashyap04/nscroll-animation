# Scroll-Driven Hero Animation

A modern scroll-driven hero section built as a frontend development assignment using Next.js, React, Tailwind CSS and GSAP.

The animation is inspired by the provided reference and focuses on a minimal automotive-style hero experience.

## Live Demo

https://hiteshkashyap04.github.io/nscroll-animation/

## GitHub Repository

https://github.com/Hiteshkashyap04/nscroll-animation

## Features

- Full-screen sticky hero section
- Letter-spaced `WELCOME ITZFIZZ` heading
- Smooth heading fade-in on page load
- Scroll-driven car animation
- Car moves horizontally with scroll progress
- Progressive statistics reveal
- Colored visual backgrounds for statistics
- Colored motion trail behind the car
- Smooth GSAP ScrollTrigger animation
- Responsive desktop, tablet and mobile layouts
- Reduced-motion support

## Statistics

The hero section displays four animated metrics:

- **58%** — Increase in pick up point use
- **23%** — Decreased in customer phone calls
- **27%** — Increase in pick up point use
- **40%** — Decreased in customer phone calls

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- GSAP ScrollTrigger
- HTML5
- CSS3
- GitHub Pages

## Project Structure

```text
nscroll-animation/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── public/
│   └── car.png
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md