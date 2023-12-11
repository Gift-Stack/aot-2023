My Solution 😭💀😂
type StreetSuffixTester<T extends string, U extends string> = T extends `${infer First} ${infer Rest}`
	? First extends U
		? true
		: Rest extends `${infer _First} ${infer _Rest}`
			? StreetSuffixTester<Rest, U>
			: Rest extends U
				? true
				: false
	: false;

// This is a wayyyyyyyyyyy shorter and appropriate solution -- By TKDodo!🚀
// type StreetSuffixTester<T extends string, U extends string> = T extends `${string}${U}` ? true : false

type SomeType = StreetSuffixTester<"Candy Cane Way", "Way"> // returns true
