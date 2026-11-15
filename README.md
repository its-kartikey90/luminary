# Luminary ✨

An open-source React component library with 60+ accessible, themeable components and a Storybook documentation site.

[![npm version](https://img.shields.io/npm/v/@its-kartikey90/luminary)](https://www.npmjs.com/package/@its-kartikey90/luminary)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Features

- 🎨 **60+ components** — Button, Badge, Card, Input, Modal, Alert, Tabs, Avatar, Progress, Tooltip and more
- 🌗 **Dark & light themes** — CSS variable-based theming
- ♿ **WCAG 2.1 AA** — full keyboard navigation, ARIA roles, focus management
- 📦 **Tree-shakeable** — import only what you use
- 🔷 **TypeScript** — full type definitions
- 📖 **Storybook** — interactive documentation

## Installation

```bash
npm install @its-kartikey90/luminary
```

> Requires Tailwind CSS in your project.

## Usage

```tsx
import { Button, Badge, Card, CardContent } from '@its-kartikey90/luminary'

export default function App() {
  return (
    <Card>
      <CardContent>
        <Badge variant="success">Live</Badge>
        <Button variant="primary" size="md">
          Get Started
        </Button>
      </CardContent>
    </Card>
  )
}
```

## Components

| Component | Description |
|-----------|-------------|
| `Button` | 6 variants, 5 sizes, loading state |
| `Badge` | Status indicators |
| `Card` | Container with header/content/footer |
| `Input` | Text input with label, error, hint |
| `Textarea` | Multi-line input |
| `Select` | Dropdown selector |
| `Checkbox` | Accessible checkbox |
| `Toggle` | On/off switch |
| `Avatar` | User avatar with fallback initials |
| `Alert` | Info/success/warning/danger alerts |
| `Modal` | Accessible dialog |
| `Tooltip` | Hover tooltips (4 placements) |
| `Spinner` | Loading indicator |
| `Progress` | Progress bar |
| `Tabs` | Tabbed navigation |

## Development

```bash
npm install
npm run storybook   # Start Storybook on port 6006
npm run build       # Build the library
npm test            # Run tests
```

## Built by

[Kartikey Dixit](https://github.com/its-kartikey90)
