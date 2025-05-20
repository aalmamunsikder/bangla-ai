# Bangla AI

A modern AI platform for Bengali language processing with a beautiful bilingual interface.

## Features

- 🤖 AI-powered chat interface for Bengali language assistance
- 🔄 Seamless language switching between English and Bengali
- 🌙 Dark/light mode toggle
- 📱 Fully responsive design for all devices
- 🎨 Beautiful UI with gradient effects and animations
- 📝 Conversation history with translation support
- 🧠 Support for text generation, summarization, translation, and more

## Technologies Used

- **React** - Frontend library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling and UI components
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Context API** - State management
- **React Router** - Navigation

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/bangla-ai.git
   cd bangla-ai
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── sections/      # Page sections
│   └── ui/            # Basic UI elements
├── contexts/          # React context providers
├── pages/             # Page components
├── styles/            # Global styles
└── App.tsx            # Main application component
```

## Internationalization

The application supports both English and Bengali languages. Language switching is implemented using a custom Context API solution.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Lucide React for the beautiful icons
- Tailwind CSS for the utility-first styling approach
- Framer Motion for smooth animations
