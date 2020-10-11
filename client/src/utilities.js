
export const debounce = (func, delay) => {
	if (typeof(func) !== 'function')
		throw new Error('first argument is not a function')
	if (typeof(delay) !== 'number')
		throw new Error('second argument is not a number')

	let timeout = null
	return (...args) => {
		clearTimeout(timeout)
		timeout = setTimeout(() => func(...args), delay)
	}
}