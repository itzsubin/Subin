# Subin Ghimire - Portfolio Website
A modern, responsive portfolio website built with React, featuring smooth animations and a clean dark/light theme toggle.

## Features
Responsive Design - Optimized for all devices from mobile to desktop
Dark/Light Theme - Toggle between themes with persistent preference storage
3D Interactive Elements - Hover effects and mouse-move animations
Touch-Optimized - Special styles for touchscreen devices
Smooth Animations - CSS transitions and transform effects
Accessibility Focused - Proper ARIA labels and keyboard navigation

## Tech Stack
Frontend: React 18, JSX
Styling: CSS Modules with CSS Variables
State Management: React Context API
Icons: SVG icons
Fonts: Google Fonts (Rubik, Roboto Mono)

## Project Structure
src/
├── Sections/
│   ├── Subu.jsx              # Main profile section
│   ├── subuStyles.module.css # Profile section styles
│   └── ...other sections
├── Common/
│   └── ThemeContext.jsx      # Theme management
├── assets/
│   ├── images/               # Profile images
│   ├── icons/                # Theme toggle icons
│   └── resumes/              # PDF resume
├── App.jsx                   # Main app component
├── App.css                   # Global styles
└── index.js                  # App entry point

## Theme System 
The website features a comprehensive theme system with:
-CSS custom properties for consistent theming
-LocalStorage persistence for user preferences
-Smooth transitions between themes
-System preference detection

## Getting Started

### Prerequisites
Node.js (v14 or higher)
npm or yarn

## Environment Setup
Create a .env file in the root directory:
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here

