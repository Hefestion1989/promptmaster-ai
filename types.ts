import { Type } from "@google/genai";

export enum TargetModel {
  GEMINI = "Gemini 1.5/2.0",
  CHATGPT = "ChatGPT (GPT-4o)",
  COPILOT = "Microsoft Copilot",
  CODEX = "OpenAI Codex / GitHub Copilot",
  OTHER_CODE = "General Code Assistant",
  MIDJOURNEY = "Midjourney v6",
  DALLE = "DALL-E 3",
  STABLE_DIFFUSION = "Stable Diffusion",
  CLAUDE = "Claude 3.5 Sonnet"
}

export interface OptimizationResult {
  optimizedPrompt: string;
  explanation: string;
  tips: string[];
}

export interface PromptHistoryItem {
  id: string;
  original: string;
  optimized: string;
  model: TargetModel;
  timestamp: number;
}