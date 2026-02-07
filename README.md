# Subin Ghimire - Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

A modern, responsive, and interactive personal portfolio website built with React 19 and Tailwind CSS. This project showcases my skills, experience, and projects with a seamless dark/light theme toggle, engaging animations, and a clean, professional design.

## 🌟 Features

- **Dynamic Theme System**: 
  - Seamless Dark/Light mode toggle with persistent local storage preference.
  - Custom **Floating Particles** animation active in Dark Mode for visual depth.
- **Responsive Design**: Fully optimized layout for mobile, tablet, and desktop devices.
- **Interactive UI**:
  - Smooth scrolling navigation.
  - Custom cursor implementation for enhanced interactivity.
  - Hover effects and transitions using CSS Modules and Tailwind utilities.
- **Functional Contact Form**: Integrated with **Web3Forms** for real-time email delivery.
- **Modern Tech Stack**: Built with React 19, Lucide Icons, and React Icons for a polished look.

## 🛠️ Tech Stack

- **Frontend**: React 19, JSX
- **Styling**: 
  - **Native CSS Modules**: Main styling method for component isolation.
  - **CSS Variables**: Extensive use for theming and consistency.
  - **Tailwind CSS**: Utility classes (v3.4).
- **Icons**: Lucide React, React Icons
- **State Management**: React Context API (`ThemeContext`)
- **Structure**: Component-based architecture bootstrapped with `create-react-app`.
- **Utilities**: Axios, Web Vitals

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

ensure you have the following installed:
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/subin-portfolio.git
   cd subin-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory to configure the contact form. You'll need an access key from Web3Forms.
   ```env
   REACT_APP_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## 📂 Project Structure

```bash
src/
├── Common/            # Shared components and logic
│   ├── Cursor/        # Custom interactive cursor
│   ├── Stars/         # Floating particles background effect
│   └── Theme/         # ThemeContext and toggling logic
├── Sections/          # Main page sections
│   ├── Navbar/        # Navigation bar
│   ├── Media/         # Social media links sidebar
│   ├── Subu/          # Hero/About Me section
│   ├── Skills/        # Technical skills display
│   ├── Projects/      # Project portfolio grid
│   └── Contact/       # Contact form logic and UI
├── assets/            # Static assets (images, icons, resumes)
├── App.jsx            # Main layout and section composition
└── index.js           # App entry point
```

## 📜 Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder. Use this for deployment.
- `npm test`: Launches the test runner in interactive watch mode.
- `npm run eject`: **Note: this is a one-way operation.** Removes the single build dependency from your project.

## 📬 Contact

**Subin Ghimire**  
📧 [subinghimire51@gmail.com](mailto:subinghimire51@gmail.com)

---

Developed with ❤️ by Subin Ghimire.
