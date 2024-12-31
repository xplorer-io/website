import OpenAI, { AzureOpenAI } from "openai";
export const callAzureOpenAI = async (messages: any) => {
  const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
  const apiKey = process.env.AZURE_OPENAI_API_KEY;
  const apiVersion = process.env.AZURE_OPENAI_VERSION;

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
        if (choice.delta.content) {
          fullResponse += choice?.delta?.content;
        }
      });
    }
  } catch (error) {
    console.error("Error calling Azure OpenAI:", error);
  }

  return fullResponse;
};
