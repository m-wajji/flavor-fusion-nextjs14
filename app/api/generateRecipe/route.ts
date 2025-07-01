// app/api/generateRecipe/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getGroqChatCompletion, ChatCompletionMessageParam } from '@/lib/grok';

export async function POST(req: NextRequest) {
  try {
    const { ingredients } = await req.json();

    if (!ingredients || !Array.isArray(ingredients)) {
      return NextResponse.json({ error: "Ingredients are required and should be an array." }, { status: 400 });
    }

    const messages: ChatCompletionMessageParam[] = [
      { role: 'user', content: `Create a recipe only using the following ingredients: ${ingredients.join(', ')}` },
    ];
    const model = "llama3-8b-8192"; // Replace with the appropriate model
    const response = await getGroqChatCompletion(messages, model);

    return NextResponse.json({ recipe: response.choices[0]?.message?.content || "No recipe generated." });
  } catch (error) {
    return NextResponse.json({ error: "Failed to generate recipe." }, { status: 500 });
  }
}
