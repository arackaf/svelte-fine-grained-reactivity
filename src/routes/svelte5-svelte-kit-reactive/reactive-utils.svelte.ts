export const makeReactive = <T>(arg: T[]): T[] => {
	let result = $state(arg);
	return result;
};
