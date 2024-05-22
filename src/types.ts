import { FinishReason, CallWarning } from "ai";

// the response from the generateText function.
export type TextResponse = {
  // the model ID.
  model: string;

  // the generated text.
  text: string;

  // the reason why the generation finished.
  readonly finishReason: FinishReason;

  // the token usage of the generated text.
  readonly usage: TokenUsage;

  // the warnings that occurred during the generation.
  warnings: CallWarning[] | undefined;
};

// the token usage of the generated text.
export type TokenUsage = {
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
};
