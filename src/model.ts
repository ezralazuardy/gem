import { google } from "@ai-sdk/google";
import "dotenv/config";

if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
  process.env.GOOGLE_GENERATIVE_AI_API_KEY = process.env.GEMINI_API_KEY ?? "";
}

const model = google(
  process.env.GOOGLE_GENERATIVE_AI_MODEL ?? "models/gemini-pro",
);

export default model;
