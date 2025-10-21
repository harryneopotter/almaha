# Al-maha Foods React Application

A modern React application converted from WordPress HTML exports, built with Vite and optimized for WHM/cPanel deployment.

## Project Structure

```
almaha-foods-react/
├── public/
│   ├── assets/
│   │   ├── images/          # Website images
│   │   ├── css/             # Global CSS files from WordPress
│   │   ├── js/              # Legacy JavaScript libraries
│   │   └── fonts/           # Web fonts
│   └── index.html
├── src/
│   ├── pages/               # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── CSR.jsx
│   │   ├── Career.jsx
│   │   └── Exports.jsx
│   ├── components/          # Reusable components
│   │   ├── Layout/
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Navigation/
│   │   └── UI/              # UI components
│   ├── styles/              # Global styles and CSS modules
│   │   ├── globals.css
│   │   └── variables.css
│   ├── App.jsx              # Main app component with routing
│   └── main.jsx             # Application entry point
├── tests/
│   └── visual/              # Playwright visual tests
├── package.json
├── vite.config.js
└── playwright.config.js
```

## Technology Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM v7.9.4
- **Build Tool**: Vite 7.1.7
- **Styling**: CSS Modules + Global CSS
- **Testing**: Playwright for visual regression testing
- **Type Checking**: PropTypes for component validation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Testing

Run visual regression tests:
```bash
npm run test:visual
```

Run tests with UI mode:
```bash
npm run test:visual:ui
```

## Deployment

This application is optimized for WHM/cPanel deployment:

1. Build the project: `npm run build`
2. Upload the contents of the `dist` folder to your web server
3. Ensure the `.htaccess` file is configured for client-side routing

### .htaccess Configuration

Create a `.htaccess` file in your web root:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Development Guidelines

### Component Structure

- Use functional components with hooks
- Implement PropTypes for type validation
- Follow PascalCase naming for components
- Use CSS Modules for component-specific styles

### Styling

- Global styles in `src/styles/globals.css`
- CSS custom properties in `src/styles/variables.css`
- Component-specific styles using CSS Modules
- Responsive design with mobile-first approach

### Asset Management

- Images: Place in `public/assets/images/`
- CSS: Global styles in `public/assets/css/`
- JavaScript: Legacy scripts in `public/assets/js/`
- Fonts: Web fonts in `public/assets/fonts/`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test:visual` - Run Playwright tests
- `npm run test:visual:ui` - Run Playwright tests with UI

## Browser Support

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Follow the existing code style and structure
2. Add appropriate PropTypes for new components
3. Include CSS Modules for component styling
4. Add visual tests for new pages/components
5. Ensure responsive design compatibility

## License

This project is proprietary to Al-maha Foods.