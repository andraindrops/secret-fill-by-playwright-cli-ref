---
name: secret-fill-by-playwright-cli-ref
description: Fills an input field using a Playwright CLI ref and a secret value from .env, keeping secrets safe from chat and generated code.
---

This tool fills an input field using a Playwright CLI ref and a secret value from `.env`.

This tool is designed to reduce secret exposure in chat and generated browser code.

## Setup

```bash
npm install -g playwright-cli
npm install secret-fill-by-playwright-cli-ref
```

## Setup - Secrets

Store secret values in your own .env file.
Do not store secrets inside this skill.

```
USERNAME=your_username
PASSWORD=your_password
```

## Usage

### Example:

```
npx secret-fill-by-playwright-cli-ref n46 USERNAME
```
