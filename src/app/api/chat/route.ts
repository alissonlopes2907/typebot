import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = new Configuration({
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json(); // Certifique-se de que messages está extraído corretamente

  // Cria a requisição para o OpenAI usando o streaming
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });

  // Cria um fluxo de dados a partir da resposta da OpenAI
  const stream = OpenAIStream(response);

  // Retorna a resposta como um stream
  return new StreamingTextResponse(stream);
}

