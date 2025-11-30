'use client'

import { useMessageStore } from '@/src/store/messagesStore'
import React from 'react'

const ChatWindow: React.FC = () => {
	const { messages } = useMessageStore()
	return (
		<div className='flex-1 bg-white/4 border border-white/8 rounded-xl p-4 flex flex-col gap-4 overflow-y-auto'>
			{messages.map(({ text, sender }, index) => {
				return (
					<div
						className='bg-white/5 border border-white/10 p-3 rounded-xl max-w-[70%]'
						key={index}
						style={{
							alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
							background:
								sender === 'user'
									? 'linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)'
									: 'rgba(255, 255, 255, 0.05)',
						}}
					>
						{text}
					</div>
				)
			})}
		</div>
	)
}

export default ChatWindow
