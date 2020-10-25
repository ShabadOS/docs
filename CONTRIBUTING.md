# Contributing to Shabad OS Docs

**Table of Contents**

- [Contributing to Shabad OS Docs](#contributing-to-shabad-os-docs)
  - [1. Getting Started](#1-getting-started)
    - [1.1. Prerequisites](#11-prerequisites)
    - [1.2. Build](#12-build)
    - [1.3. Run](#13-run)
  - [2. Workflow](#2-workflow)
  - [3. Coding Guidelines](#3-coding-guidelines)
  - [4. Thank you!](#4-thank-you)

## 1. Getting Started

If you wish to better understand how Shabad OS works or want to debug an issue: get the source, build it, and run it locally.

### 1.1. Prerequisites

In order to download necessary tools, clone the repository, and install dependencies, you’ll need network access.

You'll need the following:

- [Git](https://git-scm.com/)
- [Node.JS](https://nodejs.org/en/), x64, version `>= 12.x`

### 1.2. Build

Run `npm install` in the root directory to install all dependencies.

### 1.3. Run

Usage:

```console
npm run <command>
```

The commands are:

```console
<!--  Begin Docusaurus CLI commands -->

start             Builds and serves a preview of site locally with Webpack Dev Server
build             Compiles site for production
serve             Serve built website locally
swizzle           Customizing any Docusaurus theme components
clean             Clear generated assets, caches, build artifacts

<!-- End Docusaurus CLI commands -->

lint              ESLint to check code style issues and Prettier in check mode to check non JS/TS files
lint:format       Run prettier and then eslint to fix code style issues
```

## 2. Workflow

The general workflow of development is to choose an issue to work on, create a feature branch off `dev` branch, and submit a pull request. This model is shared across all repositories in the Shabad OS organization.

IMPORTANT: Please see the shared docs for Workflow (Issue Tracking, Branching, and Pull Requests) in the [How To Contribute wiki article](https://github.com/ShabadOS/.github/wiki/How-to-Contribute#workflow).

## 3. Coding Guidelines

Our coding guidelines are also (mostly) shared across all repos in the Shabad OS organization. Aside from scope definitions (which are repo specific), the rest should be referenced in the wiki article.

IMPORTANT: Please see the shared docs for Coding Guidelines (Names, Comments, Style, Linting, and Commit Messages) in the [How to Contribute wiki article](https://github.com/ShabadOS/.github/wiki/How-to-Contribute#coding-guidelines).

## 4. Thank you!

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to participate in this project.
