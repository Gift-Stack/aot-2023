type Santa = '🎅🏼'

type ContainsSanta<T extends string[]> = T extends [infer First, ...infer Rest extends string[]]
    ? (First extends Santa ? true : ContainsSanta<Rest>)
    : false;

type Increment<InitialArr extends string[][], CurrentArr extends string[][]> = InitialArr['length'] | CurrentArr['length'];

type SantaIndex<T extends string[], IndexCounter extends string[] = []> = T extends [infer InitialValue, ...(infer Rest extends string[])]
	? InitialValue extends Santa
		? IndexCounter['length']
		: SantaIndex<Rest, [...IndexCounter, 'not santa']>
	: never;

type FindSanta<T extends string[][], ActiveArrIndexCounter extends string[][] = []> = T extends [infer InitialArray extends (string)[], ...(infer Rest extends string[][])]
	? ContainsSanta<InitialArray> extends true
		? [ActiveArrIndexCounter['length'], SantaIndex<InitialArray>]
		: FindSanta<Rest, [...ActiveArrIndexCounter, InitialArray]>
	: never;


type SomeType0 = FindSanta<[["Hello", "Something"]]> // returns never
type SomeType = FindSanta<[
	['🎅🏼', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
  ['🎄', '🎄', '🎄', '🎄'],
]> // returns [0, 0]
