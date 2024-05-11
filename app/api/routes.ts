import { Configuration, OpenAIApi } from "openai-edge";

const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(config);
