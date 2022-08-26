export const DBLink = 'https://react-learnwords-example.herokuapp.com/';

export type Options = {
	[key: string]: string
}

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

export type GetHandler = [<T>(data?: T) => void, (<U>(data?: U) => void)?]