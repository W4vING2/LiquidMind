'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import { Data } from '@/src/types/promptBar.types'
import { fetchData } from '@/src/utils/fetchData'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function PromptBar() {
	const { register, handleSubmit, reset } = useForm<Data>()
	const { addMessage, model } = useMessageStore()

	const onSubmit = async (data: Data) => {
		const response = await fetchData(data.prompt, model)
		console.log(response)
		if (response === undefined) return
		reset()
		addMessage({
			text: data.prompt,
			sender: 'user',
		})
		addMessage({
			text: response,
			sender: 'bot',
		})
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex gap-3 items-center bg-white/5 border border-white/8 rounded-xl p-3 mt-3'
		>
			<input
				className='flex-1 bg-transparent border-none outline-none text-white'
				placeholder='Напишите промпт…'
				{...register('prompt')}
			/>
			<button className='px-4 py-2 rounded-xl bg-gradient-to-br from-purple-400 to-blue-400 text-[#041118] font-bold hover:opacity-90 transition-opacity hover:outline-white/20 flex items-center justify-center outline-white'>
				<Image
					alt='submit button'
					src='/arrowright.svg'
					width={15}
					height={15}
				/>
			</button>
		</form>
	)
}
