export interface IMessage {
	text: string
	sender: 'user' | 'bot'
}

interface IInitialState {
	messages: IMessage[]
	model: string
}

interface IActions {
	addMessage: (message: IMessage) => void
	setModel: (model: string) => void
}

export interface Store extends IInitialState, IActions {}
