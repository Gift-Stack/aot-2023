type DecipherNaughtyList<T> = T extends `${infer First}/${infer Rest}`
	? First | DecipherNaughtyList<Rest>
	: T;

type SomeType = DecipherNaughtyList<'timmy/jimmy'>; // Returns: 'jimmy' | 'timmy';
type SomeOtherType = DecipherNaughtyList<'timmy'>; // Returns: 'timmy';
