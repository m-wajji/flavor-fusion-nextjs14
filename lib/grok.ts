// lib/groq.ts
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Define the message type expected by the SDK
interface ChatCompletionMessageParam {
  role: 'user' | 'assistant' | 'system';
  content: string;
  name?: string; // Include any additional properties required by the SDK
}

// Export the function and the type
export async function getGroqChatCompletion(messages: ChatCompletionMessageParam[], model: string) {
  try {
    const response = await groq.chat.completions.create({
      messages,
      model,
    });
    return response;
  } catch (error) {
    console.error("Error fetching completion from Groq:", error);
    throw error;
  }
}

export type { ChatCompletionMessageParam }; // Export the type for external usage
