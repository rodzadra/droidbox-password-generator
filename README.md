# Password Generator

A modern and customizable password generator built with React, Vite, and shadcn/ui components.

## Features

- Select password length (4 to 64 characters) using a slider
- Toggle options for uppercase, lowercase, numbers, symbols, and spaces (switches)
- Instantly generate a random password based on selected options
- Copy generated password to clipboard with a single click
- Toast notification when password is copied
- Responsive and clean UI

## Technologies Used

- React
- TypeScript
- Vite
- shadcn/ui (Switch, Slider, Button, Card, Input, Sonner)
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

Open your browser at [http://localhost:5173](http://localhost:5173) to use the app.

## Project Structure

- `src/App.tsx`: Main application logic and UI
- `src/components/ui/`: UI components (Switch, Slider, Button, Card, Input, Sonner)
- `src/assets/`: Static assets (e.g., logo)

## Customization

You can easily adjust the password rules, UI, or add new features by editing the components in `src/`.

## License

This project is open source and available under the GNU GPL v3 License.
