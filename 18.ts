type Count<T extends string[], Toy extends string, ToyCollector extends string[] = []> = T extends [infer InitialToyValue, ...infer Rest extends string[]]
	? InitialToyValue extends Toy
		? Count<Rest, Toy, [...ToyCollector, Toy]>
		: Count<Rest, Toy, ToyCollector>
	: ToyCollector['length'];

type ToySack = [
	'🎸', '🎧', '👟', '👟', '💻', '🪀', '🧩', '🎮',
	'🎨', '🕹️', '📱', '🧩', '🧸', '🎧', '👟', '🚲',
	'📚', '⌚', '🎨', '👟', '🎸', '🧸', '👟', '🎸',
	'📱', '🎧', '🎮', '🎒', '📱', '🧩', '🧩', '🚲',
	'🕹️', '🧵', '📱', '🕹️', '🕰️', '🧢', '🕹️', '👟',
	'🧸', '📚', '🧁', '🧩', '🎸', '🎮', '🧁', '📚',
	'💻', '⌚', '🛹', '🧁', '🧣', '🪁', '🎸', '🧸',
	'🧸', '🧸', '🧩', '🪁', '🏎️', '🏎️', '🧁', '📚',
	'🧸', '🕶️', '💻', '⌚', '⌚', '🕶️', '🎧', '🎧',
	'🎧', '💻', '👟', '🎸', '💻', '🪐', '📚', '🎨',
	'📱', '🎧', '📱', '🎸', '🏎️', '👟', '🚲', '📱',
	'🚲', '🎸'
];

type Shoe = Count<ToySack, '👟'>; // returns 8
type Sock = Count<ToySack, '🧦'>; // returns 0
type Books = Count<ToySack, '📚'>; // returns 5
