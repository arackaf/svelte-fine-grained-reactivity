// place files you want to import through the `$lib` alias in this folder.

export const getCounter = (): string => {
	if (typeof window === 'undefined') {
		return ` Render—${0} `;
	}
	return ` Render—${window.getCounter()} `;
};
