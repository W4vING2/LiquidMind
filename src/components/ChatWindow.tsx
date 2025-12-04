'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import { useEffect, useRef } from 'react'
import Message from './ui/Message'

export default function ChatWindow() {
	const { messages, isLoading } = useMessageStore()
	const bottomRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
	}, [messages, isLoading])

	return (
		<div className='flex-1 bg-white/4 border border-white/8 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto'>
			{messages.map(({ text, sender }, index) => (
				<Message key={index} sender={sender} text={text} index={index} />
			))}
			{isLoading && (
				<Message
					key={messages.length}
					sender='assistant'
					text='Typing...'
					index={messages.length}
				/>
			)}
			<div ref={bottomRef} />
		</div>
	)
}
