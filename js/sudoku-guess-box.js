export default {
	props: [
		'number'
	],
	data() {
		return {
			guessing: false
		}
	},
	methods: {
		toggle() {
			this.guessing = !this.guessing
		}
	},
	mounted() {

	},
	template: `<div :class="{'sudoku-guess-box': true, 'guessing':guessing}" @click.stop="toggle">
		{{ number }}
	</div>`
}