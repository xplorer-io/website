import { ChatMessage } from "@/models/XploresAI";
import { NextResponse } from "next/server";
import { AzureOpenAI } from "openai";

export async function POST(request: Request) {
  const body = await request.json();
  const messages: ChatMessage[] = body?.messages;

  if (!messages.length) {
    return NextResponse.json({ error: "No message provided" }, { status: 400 });
  }

  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const apiVersion = process.env.AZURE_OPENAI_VERSION;

  const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    dangerouslyAllowBrowser: true,
  });

  try {
    const model = "gpt4o";
    let fullResponse = "";

    const response = await client.chat.completions.create({
      messages,
      model,
      max_tokens: 1000,
      stream: true,
    });

    for await (const chunk of response) {
      if (!chunk?.choices?.length) continue;

      for (const choice of chunk.choices) {
        const content = choice.delta?.content;
        if (typeof content === "string") {
          fullResponse += content;
        }
      }
    }

    return NextResponse.json(fullResponse, { status: 200 });
  } catch (error) {
    console.error("Error calling Azure OpenAI:", error);

    return NextResponse.json(
      { error: "Something went wrong.", details: error },
      { status: 500 },
    );
  }
}
