import { AppMarkdownLayout } from "@/components/desktop/apps/layout/AppMarkdownLayout";

const readme = `
  # stasi.dev - Interactive Developer Portfolio

A personal website that simulates a desktop and terminal environment.

<br />

## Overview

This project creates a unique portfolio experience by replicating a desktop environment in the browser. Visitors can interact with a functional terminal, open applications, and explore my projects and skills through a familiar desktop interface.

<br />

## Tech Stack & Libraries

- **TypeScript**: For type-safe code development
- **React**: UI component library
- **Next.js**: React framework for server-rendered applications
- **Vercel**: Deployment and hosting platform
- **xterm.js**: Terminal emulator for the browser
- **Chakra UI**: Component library for the UI
- **Framer Motion**: Animation library for React

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
