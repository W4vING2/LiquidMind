export const setCurrentModel = (
	idx: number,
	modelC: string,
	setActive: (idx: number) => void,
	setModel: (modelC: string) => void
) => {
	setActive(idx)
	setModel(modelC)
}
