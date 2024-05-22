import { generateText } from "ai";
import { TextResponse } from "@/src/type";
import model from "@/src/model";

/**
 * Generate text based on the prompt.
 * @param {string} prompt The props for the ask function.
 * @returns {Promise<TextResponse>} The response from the generateText function.
 */
export const ask = async (prompt: string): Promise<TextResponse> => {
  // generate the text
  const result = await generateText({ prompt, model });

  return {
    text: result.text,
    finishReason: result.finishReason,
    usage: result.usage,
    warnings: result.warnings,
  } as TextResponse;
};