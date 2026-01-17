# GitHub Copilot Instructions

## Project Overview

This is an Angular sandbox environment for experimenting with Angular features, components, and libraries. It serves as a playground for learning, prototyping, and testing Angular concepts in isolation.

## Technology Stack

- **Angular**: v21.0.8
- **TypeScript**: v5.9.3
- **Angular Material**: v21.0.6
- **RxJS**: v7.5.0
- **Testing**: Karma and Jasmine
- **Build Tool**: Angular CLI v21.0.5

## Project Structure

- `sandbox/src/app/`: Main application code
  - Individual component folders (e.g., `badge/`, `button/`, `card/`)
  - `app-routing.module.ts`: Routing configuration
  - `app.module.ts`: Root module
- `sandbox/src/assets/`: Static assets
- `sandbox/src/environments/`: Environment configurations

## Coding Standards

### TypeScript

- Use strict TypeScript mode (enabled in `tsconfig.json`)
- Enable all strict compiler options:
  - `strict: true`
  - `noImplicitReturns: true`
  - `noFallthroughCasesInSwitch: true`
  - `strictTemplates: true`
- Use explicit type annotations for function parameters and return types
- Prefer `const` over `let`, avoid `var`

### Angular Components

- Use Angular CLI to generate components: `ng generate component <name>`
- Follow the component folder structure with separate files for:
  - TypeScript (`.component.ts`)
  - HTML template (`.component.html`)
  - CSS styles (`.component.css`)
  - Unit tests (`.component.spec.ts`)
- Use the `app-` prefix for component selectors (configured in `angular.json`)
- Prefer standalone components for new components when appropriate
- Use Angular Material components from `@angular/material` package

### Code Organization

- Keep components focused and single-purpose
- Use services for shared logic and data management
- Use dependency injection for managing component dependencies
- Organize code by feature or component type in separate folders

### Naming Conventions

- Use kebab-case for file names: `my-component.component.ts`
- Use PascalCase for class names: `MyComponent`
- Use camelCase for properties and methods
- Use UPPER_SNAKE_CASE for constants

## Testing

- All components should have corresponding unit tests
- Use Jasmine for test syntax and Karma as the test runner
- Run tests with: `npm test` or `ng test`
- Follow Angular testing best practices:
  - Use `TestBed` for component testing
  - Mock dependencies appropriately
  - Test both component logic and template rendering
- Aim for meaningful test coverage

## Build and Development

### Commands

- **Start dev server**: `npm start` or `ng serve` (runs on http://localhost:4200/)
- **Build for production**: `npm run build` or `ng build`
- **Run tests**: `npm test` or `ng test`
- **Build and watch**: `npm run watch`

### Development Workflow

- Always test changes locally before committing
- Use `ng serve` for hot-reload during development
- Build the project to check for compilation errors

## Security

- Never commit sensitive information, API keys, or credentials
- Sanitize all user inputs to prevent XSS attacks
- Use Angular's built-in security features (DomSanitizer when needed)
- Follow OWASP security best practices
- Keep dependencies up to date

## Documentation

- Add JSDoc comments for public APIs and complex logic
- Keep README.md updated with new features or setup changes
- Document component inputs, outputs, and public methods
- Use inline comments sparingly and only for complex logic

## Code Style

- Follow the official Angular Style Guide: https://angular.io/guide/styleguide
- Use consistent indentation (2 spaces)
- Keep lines under 120 characters when possible
- Use meaningful variable and function names
- Remove unused imports and variables

## Git and Version Control

- Write clear, descriptive commit messages
- Mark Copilot-generated code in pull requests
- Keep commits focused on a single change or feature
- Review all generated code before committing

## Best Practices

- Prefer reactive patterns with RxJS observables
- Unsubscribe from observables to prevent memory leaks (use async pipe or takeUntil)
- Use Angular's change detection efficiently
- Lazy load modules when appropriate
- Follow Angular performance best practices
- Use trackBy functions in *ngFor loops for better performance

## Resources

- [Angular Documentation](https://angular.io/docs)
- [Angular Style Guide](https://angular.io/guide/styleguide)
- [Angular Material Documentation](https://material.angular.io/)
- [RxJS Documentation](https://rxjs.dev/)
