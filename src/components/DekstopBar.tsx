'use client'

import { models } from '@/src/config/models'
import { useMessageStore } from '@/src/store/messagesStore'
import { memo, useState } from 'react'
import Logo from './ui/Logo'
import Model from './ui/Model'

function DesktopSidebar() {
	const [activeTab, setActiveTab] = useState<'models' | 'chats'>('models')
	const [activeModel, setActiveModel] = useState(0)

	const { setIsFirstSend, setHistoryOfDialog, clearMessages } =
		useMessageStore()

	const reset = () => {
		setIsFirstSend(false)
		setHistoryOfDialog([])
		clearMessages()
	}

	return (
		<aside
			className='glass hidden md:flex flex-col gap-6 bg-white/6
			backdrop-blur-lg border border-white/12 rounded-2xl p-5 w-[260px] h-full'
		>
			<div className='flex justify-around mb-4'>
				<button
					onClick={() => setActiveTab('models')}
					className={`px-4 py-2 rounded-lg transition ${
						activeTab === 'models'
							? 'bg-white/20 border border-white/30'
							: 'opacity-60'
					}`}
				>
					Модели
				</button>

				<button
					onClick={() => setActiveTab('chats')}
					className={`px-4 py-2 rounded-lg transition ${
						activeTab === 'chats'
							? 'bg-white/20 border border-white/30'
							: 'opacity-60'
					}`}
				>
					Чаты
				</button>
			</div>

			{activeTab === 'models' && (
				<div>
					<Logo text='выбор модели' />
					<div className='flex flex-col gap-2 mt-4'>
						{models.map((model, idx) => (
							<Model
								key={idx}
								idx={idx}
								model={model}
								active={activeModel}
								setActive={setActiveModel}
							/>
						))}
					</div>
				</div>
			)}

			{activeTab === 'chats' && (
				<div className='flex flex-col'>
					<Logo text='история чатов' />
					<button
						className='border border-white/50 rounded-md p-2 mt-4 w-full'
						onClick={reset}
					>
						New Chat
					</button>
				</div>
			)}
		</aside>
	)
}

export default memo(DesktopSidebar)
