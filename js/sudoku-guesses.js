export default {
	props: [
		'state'
	],
	data() {
		return {
			guesses: []
		}
	},
	methods: {
		guessChosen(number) {
			let index = this.guesses.indexOf(number)

			if(index == -1) {
				this.guesses.push(number)
			} else {
				this.guesses.splice(index, 1)
			}

			this.$emit('guessChosen', this.guesses)
		}
	},
	mounted() {

	},
	template: `<div class="sudoku-guesses">
		<sudoku-guess-box :number="1" @click="guessChosen(1)"></sudoku-guess-box>
		<sudoku-guess-box :number="2" @click="guessChosen(2)"></sudoku-guess-box>
		<sudoku-guess-box :number="3" @click="guessChosen(3)"></sudoku-guess-box>
		<sudoku-guess-box :number="4" @click="guessChosen(4)"></sudoku-guess-box>
		<sudoku-guess-box :number="5" @click="guessChosen(5)"></sudoku-guess-box>
		<sudoku-guess-box :number="6" @click="guessChosen(6)"></sudoku-guess-box>
		<sudoku-guess-box :number="7" @click="guessChosen(7)"></sudoku-guess-box>
		<sudoku-guess-box :number="8" @click="guessChosen(8)"></sudoku-guess-box>
		<sudoku-guess-box :number="9" @click="guessChosen(9)"></sudoku-guess-box>
	</div>`
}