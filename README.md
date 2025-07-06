[![Tech used](https://skillicons.dev/icons?i=html,css,ts,react,vite)](https://skillicons.dev)

# S-Landing

A simple landing page project for my website.

## Overview

This project is a basic landing page built with TypeScript and React, utilizing Vite as a build tool. It includes a basic overlay component and is designed to be a lightweight and maintainable starting point for a personal website.

## Features

-   Built with TypeScript for type safety and maintainability.
-   Uses React for a component-based UI.
-   Includes a basic overlay component.
-   Utilizes Vite for fast development and optimized builds.
-   Modern and clean design.

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v16 or higher)
-   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Sylvixor/S-Landing.git
    cd S-Landing
    ```

2.  Install the dependencies:

    ```bash
    npm install # or yarn install
    ```

## Development

To start the development server:

```bash
npm run dev # or yarn dev
```

This will start the Vite development server, and you can view the project in your browser.

## Build

To build the project for production:

```bash
npm run build # or yarn build
```

This will create an optimized build of the project in the `dist` directory.

## Project Structure

```
S-Landing/
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public/
|   └── BG.mp4
├── src/
│   ├── App.tsx
│   ├── Effects.tsx
|   ├── events.ts
|   ├── main.tsx
|   ├── Scene.tsx
|   ├── Mobile.tsx
│   └── UI.tsx
├── style.css
├── tsconfig.json
└── tsconfig.node.json
```

-   `index.html`: Main HTML file.
-   `src/`: Contains the React components and TypeScript source code.
    -   `App.tsx`: Main application component.
    -   `Effects.tsx`: Applies visual effects..
    -   `events.ts`: Manages user interactions.
    -   `main.tsx`: Entry point for the React application.
    -   `Scene.tsx`: Handles environment.
    -   `Mobile.tsx`: Mobile website.
    -   `UI.tsx`: User interface.
-   `public/`: Static assets.
    -   `BG.mp4`: Background video.
-   `style.css`: Basic styles for the landing page.
-   `tsconfig.json`: TypeScript configuration file.
-   `LICENSE`: License file.
-   `README.md`: Documentation file.

## Configuration

-   **tsconfig.json**:

    ```json
    {
      "compilerOptions": {
        "target": "ESNext",
        "useDefineForClassFields": true,
        "lib": ["DOM", "DOM.Iterable", "ESNext"],
        "allowJs": false,
        "skipLibCheck": true,
        "esModuleInterop": false,
        "allowSyntheticDefaultImports": true,
        "strict": true,
        "forceConsistentCasingInFileNames": true,
        "module": "ESNext",
        "moduleResolution": "Node",
        "resolveJsonModule": true,
        "isolatedModules": true,
        "noEmit": true,
        "jsx": "react-jsx"
      },
      "include": ["src"],
      "references": [{ "path": "./tsconfig.node.json" }]
    }
    ```

## License

S-Landing © 2024 by Sylvixor is licensed under CC BY-NC-SA 4.0.