# DEV-5 GameLibrary

GameLibrary is an API written in NodeJS and utilizing Docker, with the main focus to allow gamers to create their personal library with their favorite games.

## Table of contents

- [DEV-5 GameLibrary](#dev-5-gamelibrary)
  - [Table of contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Purpose](#purpose)
  - [Prerequisites](#prerequisites)
  - [Quick Start](#quick-start)
  - [Configuration](#configuration)
  - [Status](#status)
  - [Questions](#questions)
  - [Reporting Issues](#reporting-issues)
  - [Code of Conduct](#code-of-conduct)
  - [License](#license)

## Introduction

Welcome to our GameLibrary API, where gaming enthusiasts can seamlessly curate and organize their own personalized game collections. Whether you're a seasoned gamer or just starting your journey, our API empowers users to create and manage their game libraries effortlessly. With the flexibility to add both existing and custom games, you can tailor your collection to reflect your unique gaming preferences. Dive into a world of customization and convenience as you explore the features that make our API the perfect companion for every gaming aficionado. Start building your dream game library today!

## Purpose

The API is written in NodeJS and is designed to help gamers create their personal collection of their favorite games.

## Prerequisites

- [Node.js V21.2.0](https://nodejs.org/en)
- [Docker](https://www.docker.com/products/docker-desktop/)
- [VSCode](https://code.visualstudio.com)

## Quick Start

1. Clone the repository using GitHub CLI

```
gh repo clone EHB-MCT/portfolio-starter-StephanVanHemelrijck
```

2. Copy the `.env.dev.example` file to a new file called `.env.dev`.

3. Run the following command to build and start the project using Docker Compose:

```
docker-compose up --build
```

## Configuration

It is currently advised to use the following values for the `.env.dev` file:

```
PG_USER=postgres
PG_PASSWORD=password
PG_DB=postgres
POSTGRES_HOST_AUTH_METHOD="trust"
```

## Status

The project is currently under development.

## Questions

If you have any questions or need assistance, feel free to open a support ticket.

## Reporting Issues

If you encounter any issues with the project, please open a GitHub issue with a clear and descriptive title, including details about the problem and how to reproduce it.

## Code of Conduct

Please review and adhere to our [Code of Conduct](CODE_OF_CONDUCT) to ensure a respectful and inclusive enviroment for all contributors.

## License

This license is supported under the [MIT License](LICENSE)
