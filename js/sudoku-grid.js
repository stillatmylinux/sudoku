export default {
	props: [
		'state',
		'grid',
		'selected_box'
	],
	data() {
		return {
			boxes: {
				box_1: { answer: 0, guess: 0 },
				box_2: { answer: 0, guess: 0 },
				box_3: { answer: 0, guess: 0 },
				box_4: { answer: 0, guess: 0 },
				box_5: { answer: 0, guess: 0 },
				box_6: { answer: 0, guess: 0 },
				box_7: { answer: 0, guess: 0 },
				box_8: { answer: 0, guess: 0 },
				box_9: { answer: 0, guess: 0 },
			}
		}
	},
	methods: {
		selectedBox(selected_box) {
			this.$emit('selectedBox', selected_box)
		}
	},
	mounted() {

	},
	template: `<div class="sudoku-grid">
		<sudoku-box v-for="(box, key, index) in boxes" :state="state" :grid="grid+1" :box="index+1" :number="box.guess" :selected_box="selected_box" @selectedBox="selectedBox"></sudoku-box>
	</div>`
}