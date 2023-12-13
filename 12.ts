type Santa = '🎅🏼'

type FindSanta<T extends string[], Count extends any[] = []> = T extends [infer First, ...(infer Rest extends string[])]
	? First extends Santa
		? Count['length']
		: FindSanta<Rest, [...Count, 0]>
	: never;


type Forest4 =  ['🎄', '🎄', '🎄', '🎅🏼', '🎄', '🎄'];
type SomeType = FindSanta<Forest4>; // Returns 3
