const TelegramBot = require('node-telegram-bot-api');
const OpenAI = require('openai-api');
const prompt = 'Hello, how are you?';
const chatgpt = new OpenAI('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');

// Crie um bot do Telegram e obtenha o token de acesso
const bot = new TelegramBot('6110964222:AAGU-kpjDap3AbKBQfzr3P24HOu4lUPQNaM', { polling: true });

// Quando o bot receber uma mensagem
bot.on('message', async (msg) => {
  // Obtenha o ID do bate-papo e a mensagem do usuário
  const chatId = msg.chat.id;
  const message = msg.text;

  // Envie a mensagem do usuário para o ChatGPT
  const response = await chatgpt.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 100,
    temperature: 0.5,
    prompt: message,
  });

  // Obtenha a resposta do ChatGPT
  const answer = response.data.choices[0].text.trim();

  // Envie a resposta do ChatGPT para o bot do Telegram
  bot.sendMessage(chatId, answer);
});




