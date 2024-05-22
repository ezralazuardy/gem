import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { TextResponse } from "./types";
import "./env";

/**
 * The model ID to use for generating text.
 */
const modelID = `models/${process.env.GOOGLE_GENERATIVE_AI_MODEL ?? "gemini-pro"}`;

/**
 * The model to use for generating text.
 */
const model = google(modelID);

/**
 * Generate text based on the prompt.
 * @param {string} prompt The props for the ask function.
 * @returns {Promise<TextResponse>} The response from the generateText function.
 */
export const ask = async (prompt: string): Promise<TextResponse> => {
  // generate the text
  const result = await generateText({ prompt, model });

  return {
    model: modelID,
    text: result.text,
    finishReason: result.finishReason,
    usage: result.usage,
    warnings: result.warnings,
  } as TextResponse;
};
