import "dotenv/config";

// set the default gemini api key
if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GEMINI_API_KEY ?? "";
}

// set the default gemini model
if (!process.env.GOOGLE_GENERATIVE_AI_MODEL) {
  process.env.GOOGLE_GENERATIVE_AI_MODEL = process.env.GEMINI_MODEL ?? "";
}
