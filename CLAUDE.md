# Enjoyment Luxury Hotel - Claude Code Context

## Project Overview

This is a hotel booking practice website built with React.js. It provides features for users to view and book room types, with member login, registration, and order management capabilities. This project serves as a classroom collaboration project for practicing React frontend development and team collaboration workflows.

## Tech Stack

- **Frontend Framework**: React.js + Vite
- **UI Tools**: Tailwind CSS
- **Routing**: React Router (Data Mode)
- **API Handling**: fetch
- **Version Control**: Git Flow
- **Code Quality**: ESLint (Airbnb) + Prettier
- **Deployment**: Github Pages

## Project Structure

```
enjoyment-luxury-hotel/
├── src/
│   ├── components/
│   │   ├── pages/          # Page components
│   │   ├── shared/         # Shared components
│   │   └── [PageFolder]/   # Multi-component pages (Home, About, etc.)
│   │       ├── Section.jsx
│   │       ├── Part.jsx
│   │       └── index.jsx   # Main component (lowercase index)
│   ├── assets/             # Images, icons, fonts
│   ├── index.css           # Global styles or Tailwind config
│   ├── Router.jsx          # Router file
│   └── main.jsx            # Entry file
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
└── index.html              # Entry HTML
```

## Git Flow Rules

### Branch Naming

- **main**: Stable version, production-ready
- **dev**: Development integration branch
- **Feature-[feature-name]**: New feature development (e.g., Feature-home-page)
- **Fix-[issue-name]**: Bug fixes (e.g., Fix-api-bug)
- **Update-[update-name]**: File updates (e.g., Update-project-spec)

### Commit Message Convention

Use the following prefixes:

- `feat:` New feature
- `fix:` Bug fix
- `style:` Styling changes (no functionality impact)
- `docs:` Documentation updates
- `refactor:` Code refactoring (no functionality impact)
- `chore:` Other miscellaneous changes (config files, dependency updates, etc.)

### Development Workflow

1. Create a new branch from `dev`:

   ```bash
   git checkout dev
   git pull origin dev
   git checkout -b Feature-[feature-name]
   ```

2. Develop and commit changes

3. Push branch and create Pull Request (PR):

   ```bash
   git push origin Feature-[feature-name]
   ```

4. Assign team member for Code Review

5. Merge back to `dev`

6. After testing, manager creates a release branch with version number (e.g., `dev-v001`)

7. Merge release branch to `main` for deployment: `dev-v001 → main`

## Main Branch

main
