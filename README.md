# ByeWind Dashboard - Modern E-commerce Analytics Platform

A comprehensive, responsive dashboard application built with React and Material-UI, featuring advanced theming, data visualization, and modern UI/UX patterns.

## 🚀 Features

### 📊 Dashboard Analytics
- **KPI Metrics**: Real-time key performance indicators with trend analysis
- **Interactive Charts**: Revenue trends, sales projections, and location-based analytics
- **Data Visualization**: Highcharts integration for professional chart rendering
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 Advanced Theming System
- **Dark/Light Mode**: Complete theme switching with persistent preferences
- **CSS Variables**: Dynamic theming using CSS custom properties
- **Material-UI Integration**: Seamless MUI theme provider integration
- **Context-Based State**: React Context for theme management
- **Smooth Transitions**: Animated theme switching with CSS transitions

### 🧭 Navigation & Layout
- **Collapsible Sidebar**: Hierarchical navigation with expandable sections
- **Right Panel**: Notifications, activities, and contacts panel
- **Responsive Navigation**: Mobile-first design with overlay panels
- **Breadcrumb Navigation**: Clear navigation hierarchy
- **Active State Management**: Visual feedback for current page

### 📋 Data Management
- **Orders Management**: Comprehensive order tracking and management system
- **Data Tables**: Sortable, filterable, and paginated data tables
- **Search & Filter**: Advanced filtering and search capabilities
- **Bulk Operations**: Multi-select and bulk actions
- **Real-time Updates**: Dynamic data refresh capabilities

### 🎯 User Experience
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized rendering with React best practices
- **Loading States**: Skeleton loaders and loading indicators
- **Error Handling**: Comprehensive error boundaries and fallbacks

## 🛠️ Technology Stack

### Frontend Framework
- **React 18**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **JavaScript (ES6+)**: Modern JavaScript features and syntax

### UI Library & Styling
- **Material-UI (MUI) v5**: Comprehensive component library
- **CSS Modules**: Scoped styling for component isolation
- **CSS Variables**: Dynamic theming and design tokens
- **Responsive Design**: Mobile-first CSS with media queries

### Data Visualization
- **Highcharts**: Professional charting library
- **Highcharts React**: React integration for Highcharts
- **Custom Chart Components**: Reusable chart components

### State Management
- **React Context**: Global state management for theme and app state
- **React Hooks**: useState, useEffect, useMemo, useCallback
- **Local Storage**: Persistent theme and user preferences

### Routing & Navigation
- **React Router v6**: Client-side routing and navigation
- **Programmatic Navigation**: Dynamic route handling
- **Route Protection**: Conditional rendering based on routes

### Development Tools
- **ESLint**: Code linting and quality assurance
- **PropTypes**: Runtime type checking for props
- **Git**: Version control and collaboration

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── AppShell/        # Main application shell
│   ├── SidePanel/       # Navigation and right panels
│   ├── lib/             # Basic reusable components
│   │   ├── KPIBox/      # KPI metric display component
│   │   └── ThemeToggle/ # Theme switching component
│   └── ECommerce/       # E-commerce specific components
│       └── OrdersTable/ # Orders management table
├── contexts/            # React Context providers
│   └── ThemeContext.jsx # Theme management context
├── constants/           # Application constants and data
│   ├── dashboardData.js # Mock data for dashboard
│   ├── leftPanelData.jsx # Navigation structure
│   └── rightPanelData.js # Right panel data
├── pages/              # Page components
│   ├── Dashboard.jsx   # Main dashboard page
│   ├── Orders.jsx      # Orders management page
│   └── ComingSoon.jsx  # Placeholder pages
├── routes/             # Routing configuration
│   └── AppRoutes.jsx   # Route definitions
├── tokens/             # Design system tokens
│   └── index.js        # CSS variables and design tokens
├── App.jsx             # Main application component
├── global.css          # Global styles and CSS variables
└── index.css           # Base styles
```

## 🎨 Design System

### Color Palette
- **Primary Colors**: Blue (#2196f3) with light/dark variants
- **Secondary Colors**: Green (#4caf50) for success states
- **Semantic Colors**: Success, warning, error, and info colors
- **Neutral Colors**: Grayscale palette for text and backgrounds

### Typography
- **Font Family**: Inter, Roboto, Helvetica, Arial (fallback)
- **Font Weights**: Light (300) to Bold (700)
- **Responsive Sizing**: Fluid typography with breakpoint adjustments

### Spacing & Layout
- **Grid System**: CSS Grid and Flexbox for layouts
- **Spacing Scale**: 4px base unit with consistent spacing
- **Breakpoints**: Mobile (768px), Tablet (900px), Desktop (1200px+)

### Components
- **Cards**: Elevated surfaces with subtle shadows
- **Buttons**: Multiple variants with hover states
- **Forms**: Consistent input styling and validation
- **Navigation**: Hierarchical menu structure

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd byewind-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features Implementation

### Theme System
```javascript
// Context-based theme management
const { theme, toggleTheme, isDarkMode } = useTheme();

// CSS variables for dynamic theming
:root {
  --color-primary: #2196f3;
  --color-background: #ffffff;
  --color-text-primary: #212121;
}

[data-theme="dark"] {
  --color-primary: #64b5f6;
  --color-background: #0a0a0a;
  --color-text-primary: #ffffff;
}
```

### Responsive Navigation
```javascript
// Mobile-first responsive design
const isMobile = useMediaQuery("(max-width: 768px)");
const isTablet = useMediaQuery("(max-width: 900px)");
const isDesktop = !isMobile && !isTablet;

// Conditional rendering based on screen size
const shouldShow = isDesktop || isOpen;
```

### Data Visualization
```javascript
// Highcharts integration with theme awareness
const options = {
  chart: {
    backgroundColor: 'transparent',
  },
  series: [{
    data: chartData,
    color: theme.palette.primary.main,
  }]
};
```

## 🔧 Coding Practices

### Component Architecture
- **Functional Components**: Modern React with hooks
- **Component Composition**: Reusable and composable components
- **Props Validation**: PropTypes for runtime type checking
- **Custom Hooks**: Reusable logic extraction

### State Management
- **Context API**: Global state for theme and app configuration
- **Local State**: Component-level state with useState
- **Derived State**: Computed values with useMemo
- **Effect Management**: Side effects with useEffect

### Styling Approach
- **CSS Modules**: Scoped styling for components
- **CSS Variables**: Dynamic theming and design tokens
- **Material-UI**: Consistent component styling
- **Responsive Design**: Mobile-first CSS approach

### Performance Optimization
- **Memoization**: useMemo and useCallback for expensive operations
- **Code Splitting**: Lazy loading for route components
- **Bundle Optimization**: Vite for fast builds and HMR
- **Image Optimization**: Responsive images and lazy loading

### Code Quality
- **ESLint**: Automated code linting
- **Consistent Naming**: camelCase for variables, PascalCase for components
- **File Organization**: Logical folder structure and naming
- **Documentation**: Comprehensive comments and README

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Overlay navigation, stacked layout)
- **Tablet**: 768px - 900px (Collapsible sidebar, adjusted spacing)
- **Desktop**: > 900px (Full sidebar, optimal layout)

### Layout Adaptations
- **Navigation**: Overlay on mobile, permanent on desktop
- **Charts**: Responsive sizing with aspect ratio maintenance
- **Tables**: Horizontal scroll on mobile, full display on desktop
- **Typography**: Fluid scaling across breakpoints

## 🎨 Theme Customization

### Adding New Colors
```css
/* In global.css */
:root {
  --color-custom: #your-color;
}

[data-theme="dark"] {
  --color-custom: #your-dark-color;
}
```

### Component Theming
```javascript
// Using theme in components
const { theme } = useTheme();

<Box sx={{
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
}}>
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
- `VITE_API_URL`: Backend API endpoint
- `VITE_APP_TITLE`: Application title
- `VITE_THEME_DEFAULT`: Default theme preference

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI team for the excellent component library
- Highcharts for professional charting capabilities
- React team for the amazing framework
- Vite team for the fast build tool

---

**ByeWind Dashboard** - Built with ❤️ using modern web technologies