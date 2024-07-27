type ReactivePacket<T> = {
	get value(): T;
	set value(newValue: T[]);
};

export const makeReactive = <T>(arg: T): ReactivePacket<T> => {
	let result = $state(arg);

	return {
		get value() {
			return result;
		},
		set value(newValue: T) {
			result = newValue;
		}
	};
};
