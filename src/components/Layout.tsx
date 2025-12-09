import BurgerSide from '@/src/components/BurgerSide'
import ChatArea from '@/src/components/ChatArea'
import ChatsSide from './ChatsSide'
import DekstopBar from './DekstopBar'

export default function Layout() {
	return (
		<div className='w-full max-w-[1100px] h-screen grid grid-cols-[300px_1fr] gap-6'>
			<DekstopBar />
			<BurgerSide />
			<ChatArea />
			<ChatsSide />
		</div>
	)
}
