export default {
	props: [
		'state'
	],
	data() {
		return {

		}
	},
	methods: {

	},
	mounted() {

	},
	template: `<div class="sudoku-guesses">
		<sudoku-guess-box :number="1"></sudoku-guess-box>
		<sudoku-guess-box :number="2"></sudoku-guess-box>
		<sudoku-guess-box :number="3"></sudoku-guess-box>
		<sudoku-guess-box :number="4"></sudoku-guess-box>
		<sudoku-guess-box :number="5"></sudoku-guess-box>
		<sudoku-guess-box :number="6"></sudoku-guess-box>
		<sudoku-guess-box :number="7"></sudoku-guess-box>
		<sudoku-guess-box :number="8"></sudoku-guess-box>
		<sudoku-guess-box :number="9"></sudoku-guess-box>
	</div>`
}