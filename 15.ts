/**
 * Apparently, doing `T extends U`, when `T` is possibly a union type (like `1 | 2`) distributes the type between the union. i.e Typescript TypeScript will evaluate the conditional type for each member of the union.
 * In out SomeOtherType scenario below, this will effectively create a union of the results for each member of ToyCount. So BoxToys<'nutcracker', 3 | 4> will be evaluated as BoxToys<'nutcracker', 3> | BoxToys<'nutcracker', 4>, resulting in ['nutcracker', 'nutcracker', 'nutcracker'] | ['nutcracker', 'nutcracker', 'nutcracker', 'nutcracker'].
 * It is called `distributive conditional type`
*/

type BoxToys<ToyName, ToyCount, ToyArray extends ToyName[] = []> = ToyCount extends number
	? ToyArray["length"] extends ToyCount
		? ToyArray
		: BoxToys<ToyName, ToyCount, [ToyName, ...ToyArray]>
	: never;

type SomeType = BoxToys<'doll', 1>
type SomeOtherType = BoxToys<'nutcracker', 3 | 4>
