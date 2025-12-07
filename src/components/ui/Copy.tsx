import type { CopyProps } from '@/src/types/copy.types'
import { useState } from 'react'

export default function Copy({ sender, text }: CopyProps) {
	const copy = async () => {
		navigator.clipboard.writeText(text)
		setIsCopy(true)
		setTimeout(() => {
			setIsCopy(false)
		}, 2000)
	}
	const [isCopy, setIsCopy] = useState(false)
	return (
		<button
			type='button'
			className='border rounded-md border-white/50 text-white text-lg p-2'
			onClick={copy}
			style={{
				alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
			}}
		>
			{isCopy ? '✅' : '📋'}
		</button>
	)
}
