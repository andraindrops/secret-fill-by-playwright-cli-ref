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

## How to use in Agent Skills?

```yaml
---
name: open-example-com-and-fill-login-form
description: Opens example.com, takes a snapshot, and fills the login form using secret-fill-by-playwright-cli-ref.
---

## Setup

\`\`\`bash
npm install -g playwright-cli
npm install secret-fill-by-playwright-cli-ref
\`\`\`

## Steps

- playwright-cli open https://example.com --headed

- playwright-cli snapshot

- find ref "username"
- npx secret-fill-by-playwright-cli-ref [previous step] with USERNAME

- find ref "password"
- npx secret-fill-by-playwright-cli-ref [previous step] with PASSWORD
```

## Support

[https://x.com/jtakahashi0604]
