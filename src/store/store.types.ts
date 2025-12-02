export interface IMessage {
	text: string
	sender: 'user' | 'bot'
}

interface IInitialState {
	messages: IMessage[]
	model: string
	isBurgerOpen: boolean
}

interface IActions {
	addMessage: (message: IMessage) => void
	setModel: (model: string) => void
	toggleBurger: () => void
}

export interface Store extends IInitialState, IActions {}
