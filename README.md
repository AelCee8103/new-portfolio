# Personal Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Features a beautiful UI with dark mode support, smooth animations, and a contact form integration.

## Features

- 💨 Built with React + Vite for lightning-fast development and performance
- 🎨 Styled with Tailwind CSS for responsive, modern design
- 🌙 Dark mode support
- ✨ Animated background with stars effect
- 📬 Contact form with EmailJS integration
- 🚀 Sections for About, Skills, Projects, and Contact
- 📱 Fully responsive design for all devices

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)
- npm (v7 or higher)

## Installation

1. Clone the repository:

```bash
git clone [your-repo-url]
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up EmailJS (for contact form):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a service and template
   - Update the EmailJS configuration in `src/components/ContactSection.jsx` with your credentials

## Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/          # Static assets
├── src/
│   ├── components/  # React components
│   ├── hooks/       # Custom React hooks
│   ├── lib/         # Utility functions
│   ├── pages/       # Page components
│   └── assets/      # Images and other assets
└── ...config files
```

## Technologies Used

- React
- Vite
- Tailwind CSS
- Radix UI (for UI components)
- EmailJS (for contact form)
- Lucide React (for icons)

## Contributing

Feel free to open issues and pull requests for any improvements you want to add.
