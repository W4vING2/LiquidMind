import { ChatOllama } from '@langchain/ollama'

const API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY

const chat = new ChatOllama({
	model: 'qwen2.5-coder',
	temperature: 0,
})

export const getResponse = async (request: string) => {
	const response = await chat.invoke([
		{
			role: 'user',
			content: request,
		},
	])
	return response.content
}

export const fetchDataGpt = async (prompt: string, model: string) =>
	fetch('https://openrouter.ai/api/v1/chat/completions', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'HTTP-Referer': 'http://localhost:3000/',
			'X-Title': 'My App',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			max_tokens: 2000,
			model: model,
			messages: [{ role: 'user', content: prompt }],
		}),
	})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			return data.choices[0].message.content
		})
