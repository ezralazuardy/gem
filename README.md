<div>
  <img alt="CodeQL Analysis" src="https://github.com/ezralazuardy/gem/actions/workflows/github-code-scanning/codeql/badge.svg" />
  <img alt="NPM License" src="https://img.shields.io/npm/l/%40ezralazuardy%2Fgem" />
  <img alt="NPM Unpacked Size" src="https://img.shields.io/npm/v/%40ezralazuardy%2Fgem" />
  <img alt="NPM Unpacked Size" src="https://img.shields.io/npm/unpacked-size/%40ezralazuardy%2Fgem" />
  <img alt="NPM Type Definitions" src="https://img.shields.io/npm/types/%40ezralazuardy%2Fgem" />
</div>

## 💎 gem

A more fun way to interact with Gemini.

```typescript
await ask("am i deserve better?");
```

Gem is a simple package that allows you to interact with the Gemini API in a more human-friendly way.

It's like talking to a friend, but in a more professional way. It's simplify the process of sending requests to the Gemini API, so you can focus more on the conversation itself. It's even more simpler than other API wrappers.

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

- `gemini-pro` (default)
- `gemini-1.5-pro-latest`

> Plase refer to these references:
> [Gemini API Models](https://ai.google.dev/gemini-api/docs/models/gemini), [Gemini API Pricing](https://ai.google.dev/gemini-api/pricing).

<br/>

### 🚥 Roadmap

The following features are planned to be implemented in the future.

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
