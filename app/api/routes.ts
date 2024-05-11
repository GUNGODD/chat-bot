import { OpenAIStream, StreamingTextResponse } from "ai";
import { Configuration, OpenAIApi } from "openai-edge";
import { Request } from "openai/src/_shims/index.mjs";

const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = "edge";
export async function POST(req: Request) {
  const { message } = await req.json();
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: message,
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
