'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import { Data } from '@/src/types/promptBar.types'
import { ChatMessage, fetchData } from '@/src/utils/fetchData'
import Image from 'next/image'
import { useForm } from 'react-hook-form'

export default function PromptBar() {
	const { register, handleSubmit, reset } = useForm<Data>()
	const {
		addMessage,
		model,
		isLoading,
		setIsLoading,
		historyOfDialog,
		setHistoryOfDialog,
	} = useMessageStore()

	const onSubmit = async (data: Data) => {
		if (!data.prompt) return
		if (isLoading) return
		const userPrompt: ChatMessage = { role: 'user', content: data.prompt }
		const newArray = [...historyOfDialog, userPrompt]
		setHistoryOfDialog(newArray)
		setIsLoading(true)
		reset()
		addMessage({
			text: data.prompt,
			sender: 'user',
		})
		try {
			const response = await fetchData(model, newArray)
			setHistoryOfDialog(prev => [
				...prev,
				{ role: 'assistant', content: response },
			])
			if (response === undefined) return
			addMessage({
				text: response,
				sender: 'assistant',
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className='flex gap-3 items-center bg-white/5 border border-white/8 rounded-xl p-3 mt-3'
		>
			<input
				className='flex-1 bg-transparent border-none outline-none text-white'
				disabled={isLoading}
				type='text'
				placeholder='Напишите промпт…'
				{...register('prompt')}
			/>
			<button className='px-4 py-2 rounded-xl bg-linear-to-br from-purple-400 to-blue-400 text-[#041118] font-bold hover:opacity-90 transition-opacity hover:outline-white/20 flex items-center justify-center outline-white'>
				{isLoading ? (
					<span className='text-sm text-white'>Loading...</span>
				) : (
					<Image
						alt='submit button'
						src='/arrowright.svg'
						width={15}
						height={15}
					/>
				)}
			</button>
		</form>
	)
}
