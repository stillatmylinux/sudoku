export default {
	props: [
		'grid',
		'box',
		'number',
		'selected_box',
		'state'
	],
	data() {
		return {
			is_selected: false,
			columns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			rows: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'],
			row: null,
			column: null,
			box_id: '',
			guess: 0,
			show_guesses: false,
			choosen_guesses: [],
		}
	},
	methods: {
		getColumn() {
			if(this.column == null) {
				let column = 1
				let row = this.getRow()

				if (row == 'A' || row == 'D' || row == 'G') {
					column = this.box
				} else if (row == 'B' || row == 'E' || row == 'H') {
					column = this.box - 3
				} else if (row == 'C' || row == 'F' || row == 'I') {
					column = this.box - 6
				}

				if (this.grid == 2 || this.grid == 5 || this.grid == 8) {
					column += 3
				} else if (this.grid == 3 || this.grid == 6 || this.grid == 9) {
					column += 6
				}

				this.column = column
			}

			return this.column
		},
		getRow() {
			if(this.row == null) {

				let row = ''

				if (this.grid <= 3) {
					row = 'A'
					if (this.box >= 4 && this.box <= 6) {
						row = 'B'
					} else if (this.box >= 7) {
						row = 'C'
					}
				} else if (this.grid <= 6) {
					row = 'D'
					if (this.box >= 4 && this.box <= 6) {
						row = 'E'
					} else if (this.box >= 7) {
						row = 'F'
					}
				} else if (this.grid <= 9) {
					row = 'G'
					if (this.box >= 4 && this.box <= 6) {
						row = 'H'
					} else if (this.box >= 7) {
						row = 'I'
					}
				}

				this.row = row
			}

			return this.row
		},
		getBoxName() {
			return this.getRow() + this.getColumn()
		},
		selectBox() {

			if (!this.state.boxes[this.box_id].show && !this.show_guesses) {
				if(this.state.boxes[this.box_id].guess == 9) {
					this.state.boxes[this.box_id].guess = -1
				}
				this.state.boxes[this.box_id].guess++
			}

			this.is_selected = true
			this.$emit('selectedBox', {
				id: this.box_id,
				row: this.row,
				column: this.column,
				grid: this.grid,
				button: true,
			})
		},
		available(event) {
			console.log(this.box_id, event)
		},
		toggleGuesses() {
			if(!this.state.boxes[this.box_id].show) {
				this.show_guesses = !this.show_guesses

				if(!this.show_guesses && this.choosen_guesses.length == 1) {
					this.state.boxes[this.box_id].guess = this.choosen_guesses[0]

					this.$emit('selectedBox', {
						id: this.box_id,
						row: this.row,
						column: this.column,
						grid: this.grid,
						button: true,
					})
				}
			}
		},
		guessChosen(choosen_guesses) {
			this.choosen_guesses = []
			choosen_guesses.forEach(choosen_guess => {
				this.choosen_guesses.push(choosen_guess)
			})
		}
	},
	mounted() {
		this.box_id = this.getBoxName()
	},
	watch: {
		selected_box(new_selected_box, old_selected_box) {
			this.is_selected = (new_selected_box.id == this.box_id)
		}
	},
	template: `
		<div :class="{'sudoku-box':true,'highlight':state.highlights,'failed':state.boxes[box_id]?.answer=='L','loading':state.boxes[box_id]?.answer===0,'selected':selected_box.id==box_id,'is-peer-grid':selected_box.peers.grid.indexOf(box_id) !== -1,'is-peer-row':selected_box.peers.rows.indexOf(box_id) !== -1,'is-peer-column':selected_box.peers.columns.indexOf(box_id) !== -1,'start-answer':state.boxes[box_id]?.answer}" @click="selectBox">
			<div>
				<div v-if="!state.boxes[box_id]?.show && !state.show_all_answers" class="btn-guess" @click.stop="toggleGuesses"></div>
				<div class="box_id" v-if="state.show_all_answers && !state.boxes[box_id]?.show">
					{{ state.boxes[box_id]?.answer ? state.boxes[box_id]?.answer : box_id }}
				</div>
				<div class="box_id" v-if="!state.show_all_answers || state.boxes[box_id]?.show">
					&nbsp;
				</div>
				<div v-if="state.boxes[box_id]?.available" class="available" :class="{'none-available':state.boxes[box_id]?.available.length == 0}">
					<span v-for="num in state.boxes[box_id]?.available">{{ num }}</span>
				</div>
				<div class="answer" v-if="state.boxes[box_id]?.show">
					{{ state.boxes[box_id]?.answer }}
				</div>
				<div v-if="!show_guesses" class="guess">
					{{ state.boxes[box_id]?.guess ? state.boxes[box_id]?.guess : '' }}
				</div>
				<sudoku-guesses v-if="!state.boxes[box_id]?.show && show_guesses" @closeGuesses="closeGuesses" @guessChosen="guessChosen" :state="state"></sudoku-guesses>
			</div>
		</div>
`
}