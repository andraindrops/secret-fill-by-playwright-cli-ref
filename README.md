# secret-fill-by-playwright-cli-ref

`secret-fill-by-playwright-cli-ref` for Agent Skills using playwright-cli.\
It fills input fields by ref and loads secret values from `.env`.\
This helps keep secrets out of chat and generated browser code.


![](https://www.j64out.dev/posts/container/20260316/1.png)

## How to use?

```
npx secret-fill-by-playwright-cli-ref n46 USERNAME
```

## How to use in Agent Skills?

```yaml
---
name: open-example-com-and-fill-login-form
description: Opens example.com, takes a snapshot, and fills the login form using secret-fill-by-playwright-cli-ref.
---

## Steps

- playwright-cli open https://example.com --headed

- playwright-cli snapshot

- find ref "username"
- npx secret-fill-by-playwright-cli-ref [previous step] with USERNAME

- find ref "password"
- npx secret-fill-by-playwright-cli-ref [previous step] with PASSWORD
```

## Setup

```bash
npm install -g playwright-cli
```

## Setup - Secrets

Store secret values in your own .env file.
Do not store secrets inside this skill.

```
USERNAME=your_username
PASSWORD=your_password
```

## Support

[https://x.com/jtakahashi0604](https://x.com/jtakahashi0604)
