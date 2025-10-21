# Project Structure

This document outlines the folder structure and organization of the Al-maha Foods React application.

## Directory Structure

```
src/
├── components/          # Reusable React components
│   ├── Layout/         # Layout components (Layout, Header, Footer, Navigation)
│   ├── UI/             # Reusable UI components
│   │   ├── Button/     # Button component with variants
│   │   ├── Card/       # Card component for content blocks
│   │   ├── Form/       # Form components (Form, Input, TextArea)
│   │   └── Section/    # Section wrapper component
│   └── index.js        # Component exports
├── pages/              # Page components
│   ├── Home.jsx        # Home page (Al-maha – Al-maha.html)
│   ├── About.jsx       # About page (Al-maha – about.html)
│   ├── Contact.jsx     # Contact page (Contact Us – Al-maha.html)
│   ├── CSR.jsx         # CSR page (Corporate Social Responsibility – Al-maha.html)
│   ├── Career.jsx      # Career page (Culture at Al Maha – career.html)
│   └── Exports.jsx     # Exports page (Exports – what-we-do.html)
├── styles/             # Styling files
│   ├── components/     # Component-specific CSS modules
│   ├── globals.css     # Global styles and WordPress CSS
│   └── variables.css   # CSS custom properties
├── hooks/              # Custom React hooks
│   ├── useLocalStorage.js
│   ├── useWindowSize.js
│   └── index.js
├── utils/              # Utility functions
│   └── index.js        # Helper functions
├── App.jsx             # Main app component with routing
└── main.jsx            # Application entry point
```

## Component Organization

### Layout Components
- **Layout**: Main layout wrapper with header and footer
- **Header**: Site header with navigation and branding
- **Footer**: Site footer with links and information
- **Navigation**: Main navigation menu component

### UI Components
- **Button**: Reusable button with variants (primary, secondary, outline, ghost)
- **Card**: Content card component with different styles
- **Section**: Page section wrapper with container and spacing
- **Form**: Form components including Form, Input, and TextArea

### Page Components
Each page component corresponds to an original HTML file and maintains the same content structure and styling.

## CSS Modules

The project uses CSS Modules for component-specific styling:
- Each component has its own `.module.css` file
- Styles are scoped to prevent conflicts
- Global styles are maintained in `src/styles/globals.css`
- CSS custom properties are defined in `src/styles/variables.css`

## Asset Organization

```
public/
└── assets/
    ├── images/         # All website images
    ├── css/           # Global CSS files from WordPress
    ├── fonts/         # Web fonts
    └── js/            # Legacy JavaScript libraries (if needed)
```

## Import Patterns

### Component Imports
```javascript
// Import individual components
import Layout from '../components/Layout/Layout';
import { Button, Card } from '../components/UI';

// Import all UI components
import * as UI from '../components/UI';
```

### Utility Imports
```javascript
import { classNames, slugify, isValidEmail } from '../utils';
```

### Hook Imports
```javascript
import { useLocalStorage, useWindowSize } from '../hooks';
```

## Naming Conventions

- **Components**: PascalCase (e.g., `Button.jsx`, `ContactForm.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **CSS Modules**: ComponentName.module.css
- **CSS Classes**: camelCase in CSS, accessed via styles object
- **Props**: camelCase
- **Constants**: UPPER_SNAKE_CASE

## Best Practices

1. **Single Responsibility**: Each component should have a single, well-defined purpose
2. **PropTypes**: All components should define PropTypes for type checking
3. **CSS Modules**: Use CSS Modules for component-specific styles
4. **Accessibility**: Include proper ARIA attributes and semantic HTML
5. **Performance**: Use React.memo() for expensive components when needed
6. **Error Boundaries**: Wrap components in error boundaries for better error handling

## Development Guidelines

1. Keep components small and focused
2. Use functional components with hooks
3. Follow the established folder structure
4. Write self-documenting code with clear prop names
5. Test components thoroughly before integration
6. Maintain visual fidelity with original HTML designs