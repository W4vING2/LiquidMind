import { API_KEY } from '../config/apiKey'

export const fetchData = async (prompt: string, model: string) =>
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
		.then(data => data.choices[0].message.content)
