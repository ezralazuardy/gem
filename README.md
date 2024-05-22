<div>
  <img alt="License" src="https://img.shields.io/github/license/ezralazuardy/gem" />
  <img alt="CodeQL Analysis" src="https://github.com/ezralazuardy/gem/actions/workflows/github-code-scanning/codeql/badge.svg" />
</div>

## 💎 gem

A more fun way to interact with Gemini.

### 🚀 Getting Started

Install the package

```bash
npm install @ezralazuardy/gem
```

Setup the Environment Variables

```bash
GEMINI_API_KEY="<YOUR_GEMINI_API_KEY>"
GEMINI_MODEL_ID="gemini-pro"
```

Ask the Gemini 💎

```typescript
import { ask } from "@ezralazuardy/gem";

const response = await ask("What is the weather today?");

console.log(response);
```

### 📖 Documentation

A proper documentation is still in progress.

> Written in [Typescript](https://www.typescriptlang.org). Heavily inspired by [Vercel AI](https://sdk.vercel.ai) and [Gemini](https://gemini.google.com).
