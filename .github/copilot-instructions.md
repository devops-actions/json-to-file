# GitHub Copilot Custom Instructions

## Project Overview
This is a GitHub Action that writes JSON data to a file without requiring string escaping in bash scripts.

## Build and Development Requirements

### Dist Folder
**IMPORTANT**: The `dist/` folder must be kept up to date on all pull requests. This is critical because GitHub Actions execute code from the `dist/` folder, not from the source files.

When making changes to the TypeScript source code:
1. Always run `npm run all` to rebuild the dist folder before committing
2. The build process includes linting, formatting, and bundling via esbuild
3. Commit both the source changes and the updated `dist/` files
4. The `check-dist` workflow will verify that the dist folder is up to date

### Build Process
- Run `npm ci` to install dependencies
- Run `npm run all` to lint, format, and build the project
- The build outputs to `dist/main.js` using esbuild

### Testing
- Run `npm test` to execute the test suite
- Tests are located in the `__tests__/` directory

## Code Style
- TypeScript is used for source code
- ESLint is configured for linting
- Prettier is configured for formatting
- Follow the existing code style and patterns in the repository
