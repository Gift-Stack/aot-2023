type Reverse<T extends string> = T extends `${infer First}${infer Rest}`
	? `${Reverse<Rest>}${First}`
	: ''

// Example -- returns "Hello"
type SomeType = Reverse<"olleH">
