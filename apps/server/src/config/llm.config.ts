import { registerAs } from '@nestjs/config';

export default registerAs('llm', () => ({
  apiKey: process.env.LLM_API_KEY || '',
  baseUrl: process.env.LLM_BASE_URL || 'https://api.openai.com/v1',
  model: process.env.LLM_MODEL || 'gpt-4',
  maxTokens: parseInt(process.env.LLM_MAX_TOKENS || '4096', 10),
}));
