'use client'

import { models } from '@/src/config/models'
import { useMessageStore } from '@/src/store/messagesStore'
import { setCurrentModel } from '@/src/utils/setCurrentModel'
import { useState } from 'react'

export default function Sidebar() {
	const [active, setActive] = useState(0)
	const { setModel, isBurgerOpen } = useMessageStore()

	return (
		<aside
			className='glass bg-white/6 backdrop-blur-lg border border-white/12 rounded-2xl p-5 md:block fixed md:static top-0 left-0 h-full md:h-auto w-[260px] md:w-auto transition-left duration-300'
			style={{
				left: isBurgerOpen ? '0' : '-300px',
			}}
		>
			<div className='flex items-center gap-3 mb-6'>
				<div className='w-12 h-12 rounded-lg bg-gradient-to-br from-purple-400 to-teal-400 flex items-center justify-center font-bold text-[#041118]'>
					LM
				</div>
				<div>
					<div className='font-bold'>LiquidMind</div>
					<div className='text-xs text-white/55'>Выбор модели</div>
				</div>
			</div>
			<div className='flex flex-col gap-2'>
				{models.map((model, idx) => (
					<div
						key={idx}
						onClick={() => setCurrentModel(idx, model, setActive, setModel)}
						className={`p-2 rounded-xl cursor-pointer border border-white/8 ${
							active === idx
								? 'bg-gradient-to-br from-purple-400 to-blue-400 text-[#041118] border-none'
								: ''
						}`}
					>
						{model}
					</div>
				))}
			</div>
		</aside>
	)
}
