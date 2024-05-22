<div>
  <img alt="License" src="https://img.shields.io/github/license/ezralazuardy/gem" />
  <img alt="CodeQL Analysis" src="https://github.com/ezralazuardy/gem/actions/workflows/github-code-scanning/codeql/badge.svg" />
</div>

## 💎 gem

A more fun way to interact with Gemini.

```typescript
await ask("am i deserve better?");
```

Gem is a simple package that allows you to interact with the Gemini API in a more human-friendly way. It's like talking to a friend, but in a more professional way. It's simplify the process of sending requests to the Gemini API, so you can focus more on the conversation itself. It's even more simpler than other API wrappers.

> 🚧 This package is still under heavy development. Beware of breaking changes.

<br/>

### 🚀 Getting Started

It's only require 3 simple steps to get started.

Install the package

```bash
npm install @ezralazuardy/gem
```

Set the environment variables

```bash
GEMINI_API_KEY="<YOUR_GEMINI_API_KEY>"
```

Ask the Gemini.

```typescript
import { ask } from "@ezralazuardy/gem";

const response = await ask("what is the weather today?");

console.log(response);
```

Yup, just like that! Simple, right?

For advanced usage, please read the [documentation](#-documentation) below.

<br/>

### ⚙️ Using Specific Model

By default, the model used is `gemini-pro`. You can change it by setting the `GEMINI_MODEL_ID` environment variable.

```bash
GEMINI_MODEL_ID="gemini-pro"
```

Please beware of the pricing and capabilities of each model.

As of `v0.0.1`, the following models are available:

- `gemini-1.5-pro-latest`
- `gemini-pro` (default)

> Plase refer to these references:
> [Vercel AI Models](https://sdk.vercel.ai/providers/ai-sdk-providers/google-generative-ai#model-capabilities), [Gemini API Models](https://ai.google.dev/gemini-api/docs/models/gemini), [Gemini API Pricing](https://ai.google.dev/gemini-api/pricing).

<br/>

### 🚥 Roadmap

| Supported | Method           | Version   | Usage                                                    |
| --------- | ---------------- | --------- | -------------------------------------------------------- |
| 🟢        | `ask`            | `v0.0.1+` | Generates text for a given prompt.                       |
| 🔴        | `askByStream`    | `-`       | Streams a text generations.                              |
| 🔴        | `object`         | `-`       | Generates a typed, structured object for a given prompt. |
| 🔴        | `objectByStream` | `-`       | Streams a typed, structured object for a given prompt.   |

<br/>

### 📖 Documentation

A proper documentation is still in progress 🥲

> Written in [Typescript](https://www.typescriptlang.org). Heavily inspired by [Vercel AI](https://sdk.vercel.ai) and [Gemini](https://gemini.google.com).
