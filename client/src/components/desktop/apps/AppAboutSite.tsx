import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const readme = `
  # stasi.dev - Interactive Developer Portfolio

A personal website that simulates a desktop and terminal environment.

<br />

## Overview

This project creates a unique portfolio experience by replicating a desktop environment in the browser. Visitors can interact with a functional terminal, open applications, and explore my projects and skills through a familiar desktop interface.

<br />

## Tech Stack & Libraries

- **React**: Frontend UI library for building the interface
- **TypeScript**: For type-safe JavaScript development
- **Next.js**: React framework for server-side rendering and static site generation
- **Redux**: State management for the application
- **Chakra UI**: Component library for building the UI elements
- **Framer Motion**: Animation library for smooth transitions
- **xterm.js**: Terminal emulator implementation for the browser

<br />

## Icons

- **Moka Icons** by Sam Hewitt
- Licensed under CC-SA-4.0

<br />

## Features

- Interactive terminal with custom commands
- Window management system (open, close, resize, minimize)
- Desktop applications (Resume, Projects, Contact, etc.)
- Responsive design
`;

export function AppAboutSite() {
  return <AppMarkdownLayout markdown={readme} title="About Site" />;
}
