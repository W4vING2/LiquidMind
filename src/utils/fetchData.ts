import { API_KEY } from '../config/apiKey'

export const fetchData = async (prompt: string, model: string) => {
	if (prompt === '') return undefined

	try {
		const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'HTTP-Referer': 'http://localhost:3000/',
				'X-Title': 'My App',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				max_tokens: 2000,
				model,
				messages: [{ role: 'user', content: prompt }],
			}),
		})

		const data = await res.json()

		return data.choices[0].message.content
	} catch (err) {
		console.error(err)
		return 'Ошибка запроса'
	}
}
