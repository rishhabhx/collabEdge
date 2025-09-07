# CLAUDE.md

## Project Structure

CollabEdge is a **monorepo** built on top of Excalidraw with custom AI integrations:

- **`packages/excalidraw/`** - Main React component library (based on @excalidraw/excalidraw)
- **`excalidraw-app/`** - CollabEdge web application with AI features
- **`packages/`** - Core packages: `@excalidraw/common`, `@excalidraw/element`, `@excalidraw/math`, `@excalidraw/utils`
- **`examples/`** - Integration examples (NextJS, browser script)

## Development Workflow

1. **Package Development**: Work in `packages/*` for editor features
2. **App Development**: Work in `excalidraw-app/` for CollabEdge-specific features
3. **AI Features**: AI components are in `excalidraw-app/components/AI.tsx`
4. **Testing**: Always run `yarn test:update` before committing
5. **Type Safety**: Use `yarn test:typecheck` to verify TypeScript

## Development Commands

```bash
yarn test:typecheck  # TypeScript type checking
yarn test:update     # Run all tests (with snapshot updates)
yarn fix             # Auto-fix formatting and linting issues
yarn start           # Start development server
```

## AI Configuration

Add your OpenAI API key to `.env.local`:
```bash
VITE_APP_OPENAI_API_KEY=your_api_key_here
```

## Architecture Notes

### Package System

- Uses Yarn workspaces for monorepo management
- Internal packages use path aliases (see `vitest.config.mts`)
- Build system uses esbuild for packages, Vite for the app
- TypeScript throughout with strict configuration
- AI features integrated via OpenAI API calls
