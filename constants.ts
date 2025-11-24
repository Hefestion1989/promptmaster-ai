import { TargetModel } from "./types";
import { Users, Code, Image, MessageSquare, Sparkles, Terminal } from "lucide-react";

export const MODEL_OPTIONS = [
  {
    value: TargetModel.GEMINI,
    label: "Gemini",
    icon: Sparkles,
    category: "General",
    description: "Lógica y razonamiento."
  },
  {
    value: TargetModel.CHATGPT,
    label: "ChatGPT",
    icon: MessageSquare,
    category: "General",
    description: "Conversación fluida."
  },
  {
    value: TargetModel.CLAUDE,
    label: "Claude",
    icon: Users,
    category: "General",
    description: "Escritura natural."
  },
  {
    value: TargetModel.CODEX,
    label: "Copilot",
    icon: Code,
    category: "Código",
    description: "GitHub Copilot / IDEs."
  },
  {
    value: TargetModel.OTHER_CODE,
    label: "Dev (General)",
    icon: Terminal,
    category: "Código",
    description: "Cualquier asistente dev."
  },
  {
    value: TargetModel.MIDJOURNEY,
    label: "Midjourney",
    icon: Image,
    category: "Imagen",
    description: "Fotorealismo artístico."
  },
  {
    value: TargetModel.DALLE,
    label: "DALL-E",
    icon: Image,
    category: "Imagen",
    description: "Adherencia exacta."
  },
];

export const APP_NAME = "PromptMaster";