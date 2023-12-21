type Rock = '👊🏻';
type Paper = '🖐🏾';
type Scissors = '✌🏽';
type RockPaperScissors = Rock | Paper | Scissors;

// Rock beats scissors
// Scissors beats paper
// Paper beats rock

type WhoWins<Player1 extends RockPaperScissors, Opposer extends RockPaperScissors> = Opposer extends Player1
	? 'draw'
	: Opposer extends Rock
		? Player1 extends Scissors
			? 'win'
			: Player1 extends Paper
				? 'lose'
				: ''
		: Opposer extends Paper
			? Player1 extends Scissors
				? 'lose'
				: Player1 extends Rock
					? 'win'
					: ''
		: Opposer extends Scissors
			? Player1 extends Paper
				? 'win'
				: Player1 extends Rock
					? 'lose'
					: ''
		: never;

// PS: I feel like there would be a shorter way to handle this, but I am lazy right now :(
