# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev`
- **Build for production**: `npm run build`
- **Lint code**: `npm run lint`
- **Preview production build**: `npm run preview`
- **Deploy to GitHub Pages**: `npm run deploy` (automatically runs build first)

## Project Architecture

This is a React.js luxury hotel booking website built with Vite, featuring a component-based architecture for a collaborative learning project.

### Tech Stack
- **Frontend**: React 19.1+ with Vite 7.1+
- **Styling**: Tailwind CSS 4.1+ with Vite plugin
- **Routing**: React Router 6.30+ with Data Mode (createBrowserRouter)
- **Forms**: React Hook Form 7.63+
- **Deployment**: GitHub Pages with gh-pages
- **Code Quality**: ESLint with Airbnb config + Prettier

### Component Organization
Components are organized by feature/domain rather than by type:
- `auth/` - Authentication components (Login, SignUp)
- `footer/` - Footer-related components
- `forms/` - Form components
- `Header/` - Header components
- `Home/` - Home page specific components
- `shared/` - Reusable shared components
- `ui/` - UI utility components

Page-specific components that need multiple sub-components are grouped in folders with an `index.jsx` as the main component.

### Key Architectural Decisions

**GitHub Pages Deployment**: The project is configured for GitHub Pages deployment with basename `/enjoyment-luxury-hotel/`. Both `vite.config.js` (base) and `Router.jsx` (basename) are configured to support this deployment path.

**React Router Data Mode**: Uses `createBrowserRouter` for modern routing patterns. Routes are nested under a main Layout component.

**Tailwind CSS v4**: Uses the latest Tailwind CSS version with the new Vite plugin (`@tailwindcss/vite`) for optimal integration.

### Git Workflow (From README)
- **Main branch**: `main` (stable, production-ready)
- **Development branch**: `dev` (integration branch)
- **Feature branches**: `Feature-{feature-name}` format
- **Bug fixes**: `Fix-{issue-name}` format
- **Updates**: `Update-{update-name}` format

### Commit Convention
- `feat:` 新增功能 (new features)
- `fix:` 修正 bug (bug fixes)
- `style:` 樣式調整 (styling changes)
- `docs:` 文件更新 (documentation)
- `refactor:` 重構程式碼 (code refactoring)
- `chore:` 其他雜項 (maintenance tasks)

### Development Workflow
1. Create feature branches from `dev`
2. Push branch and create Pull Request
3. Code review by team members
4. Merge to `dev`
5. After testing, create versioned branch (e.g., `dev-v001`)
6. Merge versioned branch to `main` for production deployment

Always run `npm run lint` before committing to ensure code quality.