# Feefo Frontend

## UI Assessment Task

This repository implements the provided UI design as a set of modular React components. The assessment demonstrates:

- **Responsive Layout:** Components and layout grow/shrink sensibly with the viewport.
- **Componentization:** The design is split into several reusable components.
- **Prop Types:** TypeScript interfaces are used for all component props, ensuring type safety and clarity.
- **Unit Testing:** All components are covered by unit tests using Jest and Testing Library.
- **Accessibility:** ARIA attributes and roles are added for a11y best practices.

### Technical Notes

- Font family is Google font Poppins. Exact font sizes are approximate to the design.
- Styling is implemented with styled-components for modular and themeable styles.
- Jest and Testing Library are used for unit tests.
- To run locally, see instructions below. To share, push to a GitHub repository and share the link.

A modern React + TypeScript + Vite project for Feefo UI components, featuring styled-components theming, accessibility, and comprehensive testing.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- pnpm (recommended) or npm/yarn

### Installation

```sh
pnpm install
```

Or with npm:

```sh
npm install
```

Or with yarn:

```sh
yarn install
```

### Running the Development Server

```sh
pnpm dev
```

Or:

```sh
npm run dev
```

Or:

```sh
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Building for Production

```sh
pnpm build
```

Or:

```sh
npm run build
```

Or:

```sh
yarn build
```

### Previewing the Production Build

```sh
pnpm preview
```

Or:

```sh
npm run preview
```

Or:

```sh
yarn preview
```

### Linting

```sh
pnpm lint
```

Or:

```sh
npm run lint
```

Or:

```sh
yarn lint
```

### Running Tests

```sh
pnpm test
```

Or:

```sh
npm run test
```

Or:

```sh
yarn test
```

## Project Structure

- `src/` - Source code
  - `components/` - UI components (with tests and stories)
  - `assets/` - Theme and type definitions
  - `App.tsx` - Main app entry
- `public/` - Static assets
- `package.json` - Project configuration and scripts

## Technologies Used

- React 19
- TypeScript
- Vite
- styled-components
- ESLint
- Vitest & Testing Library

## Accessibility & Theming

- All components use accessible ARIA attributes and roles.
- Centralized theme for colors, spacing, and typography.
# FeefoFrontend
