import { MemoryCard } from "../types/responses";
import arrayShuffle from "./arrayShuffle";

const getTranslaties = (id: string, array: MemoryCard[]) => {
	const baseIndex = array.findIndex(elem => elem.id === id);
	const keysArray = [baseIndex];
	while (keysArray.length < 4) {
		let generatedIndex = Math.floor(array.length * Math.random());
		if (!keysArray.includes(generatedIndex)) {
			keysArray.push(generatedIndex);
		}
	}
	return arrayShuffle(keysArray);
};

export default getTranslaties