# FaceX Website [FACEX](https://facex-frontend.onrender.com)

![FACEX Image](src/assets/interface.png)

This social media website Inspired by ( [facebook](https://facebook.com), [linkedin](https://linkedin.com) and [x](https://x.com) (Twitter previously)).

- We use React Vite TS `npm create vite@latest` For Building FACEX Website

## Expanding Configuration Files

- this code under blow is for the `package.json` file

```js
{
  "name": "facex",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^6.4.2",
    "@fortawesome/free-brands-svg-icons": "^6.4.2",
    "@fortawesome/free-regular-svg-icons": "^6.4.2",
    "@fortawesome/free-solid-svg-icons": "^6.4.2",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "@reduxjs/toolkit": "^1.9.7",
    "bootstrap": "^5.3.2",
    "localforage": "^1.10.0",
    "match-sorter": "^6.3.1",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.1",
    "react-dom": "^18.2.0",
    "react-redux": "^8.1.3",
    "react-router-dom": "^6.17.0",
    "sass": "^1.69.4",
    "sort-by": "^1.2.0",
    "styled-components": "^6.1.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "react-test-renderer": "^18.2.0",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

- this code under blow is for the `tsconfig.json` file

```js
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

- this code under blow is for the `tsconfig.node.json` file

```js
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "outDir": "./build"
  },
  "include": ["vite.config.ts"]
}
```

- FACEX Folder STructure

```
|--- src/
   |--- assets
   |--- components/
         |--- Alert
         |--- Posts
         |--- SearchBar
   |--- constants/
         |--- Logo
   |--- functions
   |--- middleware
   |--- pages/
      |--- Admin
      |--- Home
      |--- Jobs
      |--- Messages
      |--- Notifications
      |--- Profile/
          |--- Helpers/
              |--- Aside
              |--- Sections
      |--- User
      |--- Networks
   |--- routes
   |--- sass
   |--- scss
   |--- services
   |--- store/
      |--- actions
      |--- apis
      |--- reducers
   |--- utils
   |--- views/
      |--- Header
      |--- Main
      |--- Footer
      |--- SideBar/
          |--- Helpers/
              |--- FeedIdentity
              |--- RecentIdentity
      |--- Aside

```
