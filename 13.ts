type GenericRange<Start extends number, End extends number> =
    Start extends End ? Start : Start | GenericRange<Increment<Start>, End>;

type Increment<N extends number, Arr extends any[] = []> = 
    Arr['length'] extends N ? [unknown, ...Arr]['length'] : Increment<N, [unknown, ...Arr]>;

type DayCounter<Start extends number, End extends number> = GenericRange<Start, End>;


type SomeType = DayCounter<1,12> // returns  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
