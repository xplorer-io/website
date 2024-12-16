import OpenAI, { AzureOpenAI } from "openai";
export const callAzureOpenAI = async (messages: any) => {
  // Your Azure OpenAI details
  const endpoint =
    "https://xplorersopenai3826747601.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-02-15-preview";
  const apiKey = "98b145dd396e4d1595e91bd62964592c";
  const apiVersion = "2024-02-15-preview";
  const client = new AzureOpenAI({
    endpoint,
    apiKey,
    apiVersion,
    dangerouslyAllowBrowser: true,
  });

  const model = "gpt4o";
  let fullResponse = "";

  try {
    // Call the model
    const response = await client.chat.completions.create({
      messages,
      model,
      max_tokens: 1000,
      stream: true,
    });
    for await (const chunk of response) {
      chunk?.choices?.forEach((choice) => {
        fullResponse += choice?.delta?.content;
      });
    }
  } catch (error) {
    console.error("Error calling Azure OpenAI:", error);
  }
  return fullResponse;
};
