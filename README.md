<div>
  <img alt="License" src="https://img.shields.io/github/license/ezralazuardy/gem" />
  <img alt="CodeQL Analysis" src="https://github.com/ezralazuardy/gem/actions/workflows/github-code-scanning/codeql/badge.svg" />
</div>

## 💎 gem

A more fun way to interact with Gemini.

🚧 This package is still under heavy development. Beware of breaking changes.

### 🚀 Getting Started

Install the package

```bash
npm install @ezralazuardy/gem
```

Set the environment variables

```bash
GEMINI_API_KEY="<YOUR_GEMINI_API_KEY>"
```

Then, just ask the Gemini.

```typescript
import { ask } from "@ezralazuardy/gem";

const response = await ask("What is the weather today?");

console.log(response);
```

Yup, just like that! Simple, right?
For advanced usage, please read the [documentation](#-documentation).

### ⚙️ Using Specific Model

By default, the model used is `gemini-pro`. You can change it by setting the `GEMINI_MODEL_ID` environment variable.

```bash
GEMINI_MODEL_ID="gemini-pro"
```

### 📦 Model Capabilities

As of `v0.0.1`, the following models are available:

- `gemini-1.5-pro-latest`
- `gemini-pro` (default)

> Plase refer to these references:
> [Vercel AI Models](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai#model-capabilities), [Gemini API Models](https://ai.google.dev/gemini-api/docs/models/gemini)

### 📖 Documentation

A proper documentation is still in progress 🥲

> Written in [Typescript](https://www.typescriptlang.org). Heavily inspired by [Vercel AI](https://sdk.vercel.ai) and [Gemini](https://gemini.google.com).
