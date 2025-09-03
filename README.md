# Spell App

A React + TypeScript application for browsing spells and adding to favourites. This project includes global search, filters, pagination, detailed spell views and see your favourites list of spells.

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

---

## Features

- Browse and view spell details
- Global search and filter functionality
- Pagination for large lists
- Reusable components: Loading, Error, NotFound
- Context API for managing search state
- Custom hooks for API fetching and local storage

---

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AashishKatila/Aashish-Katlia-SpellApp
   cd Aashish-Katlia-SpellApp

   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Paste env variables present in env.sample

4. Start the development server:

   ```bash
   npm run dev
   ```

---

## Usage

- Navigate to the home page to browse spells.
- Use the search and filter options to narrow down results.
- Click on a spell to see detailed information.
- Loading, error, and not found states are handled gracefully.
- Add your favourite spells and view it separately

---

## Folder Structure

    ```bash

    src/
    ├─ assets/                  # Static assets like images, icons
    ├─ components/              # Reusable UI components
    │   ├─ Error.tsx
    │   ├─ Header.tsx
    │   ├─ Loading.tsx
    │   ├─ NotFound.tsx
    │   ├─ Pagination.tsx
    │   ├─ SearchFilter.tsx
    │   └─ SpellCard.tsx
    ├─ context/                 # Context providers
    │   └─ search-context.tsx
    ├─ hooks/                   # Custom React hooks
    │   ├─ useFetch.tsx
    │   └─ useLocalStorage.tsx
    ├─ pages/                   # Application pages
    │   ├─ SpellDetails.tsx
    │   └─ SpellList.tsx
    │   └─ Favourites.tsx
    ├─ types/                   # TypeScript types
    │   ├─ pagination.ts
    │   ├─ search-context.ts
    │   └─ spells.ts
    └─ utils/                   # Utility functions
        └─ endpoints.ts

---

## Other files:

- App.tsx / App.css — main app component
- index.css — global styles
- .env — environment variables
- .gitignore — files to ignore in git
