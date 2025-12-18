# My Docusaurus Portfolio

This repository contains a personal portfolio website built with [Docusaurus](https://docusaurus.io/), a static site generator for modern documentation and content-driven websites.

## Repository Description

The project provides a ready-to-use setup for creating and maintaining a portfolio with Docusaurus.  
It includes configuration files, scripts, and tooling to support local development and deployment.  
The website can be deployed easily to platforms such as GitHub Pages or served via NGINX.

## Table of Contents

- [My Docusaurus Portfolio](#my-docusaurus-portfolio)
  - [Repository Description](#repository-description)
  - [Table of Contents](#table-of-contents)
  - [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [How to Start](#how-to-start)
  - [Repository Structure](#repository-structure)
  - [Deployment](#deployment)
    - [Deploy to Github Pages](#deploy-to-github-pages)
    - [Deploying using NGINX](#deploying-using-nginx)
    - [Contributing](#contributing)

## Quickstart

### Prerequisites

Make sure the following tools are installed:

- [Node.js](https://nodejs.org/) (version 16 or newer)
- [pnpm](https://pnpm.io/) (package manager)
- [Docker](https://www.docker.com/products/docker-desktop) (only required for [NGINX deployment](#deploying-using-nginx))

### How to Start

1. Install dependencies

   ```
   $ pnpm install
   ```


2. Start development server

   ```
   $ pnpm start
   ```


This starts a local development server. Changes are applied automatically.

3. Build the project

   ```
   $ pnpm build
   ```



The static website is generated in the `build` directory.

4. Deploy to GitHub Pages

Make sure `docusaurus.config.ts` is configured correctly for GitHub Pages conforms with the [documentation guidelines](https://docusaurus.io/docs/deployment#deploying-to-github-pages).  
Then run:

   USE_SSH=true pnpm deploy

For detailed information about deploying this Docusaurus project, refer to the [Deployment](#deployment) section below.

## Repository Structure

The repository is structured as follows:

- `blog/` – Blog posts written in Markdown
- `docs/` – Documentation files used by Docusaurus
- `src/` – Custom React components and styles
- `static/` – Static assets such as images and icons
- `sidebars.ts` – Sidebar configuration for the docs
- `docusaurus.config.ts` – Main Docusaurus configuration
- `build/` – Generated static site (created by `pnpm build`)

To add content:

- Add documentation files to `docs/`
- Add blog posts to `blog/`

## Deployment

### Deploy to Github Pages

Using SSH:

   ```
   $ USE_SSH=true pnpm deploy
   ```


Without SSH:

```
$ GIT_USER=<Your GitHub username> pnpm deploy
```


This builds the site and pushes it to the `gh-pages` branch.

### Deploying using NGINX

To deploy the site with Docker and NGINX, follow this [guide](./docs/guides/deploy-docusaurus-with-docker-and-nginx.md).