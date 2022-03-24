export default {
	props: [],
	data() {
		return {
			msg: {
				you_won: 'You won!',
				you_lose: 'Not quite right',
				reset: 'Are you sure you want to start a new game?',
				bad_puzzle: 'This puzzle is not playable',
				cheated: 'But you cheated',
				btn: {
					new_game: 'New Game',
					test_answers: 'Test Answers',
					show: 'Show',
					hide: 'Hide Answers',
					cheat: 'Cheat',
					highlights: 'Highlights',
				},
				info: {
					selected: 'Selected',
					grid: 'Grid',
					row: 'Row',
					column: 'Column',
					grid_peers: 'Grid peers',
					row_peers: 'Row peers',
					column_peers: 'Column peers',
				}
			},
			difficulty: {
				level: 'easy',
				squares: 54,
			},
			playLevels: {
				hard: 30,
				normal: 44,
				easy: 54,
			},
			guesses_remain: 81,
			you_won: false,
			you_cheated: false,
			readyBoxes: 0,
			failedBuildCount: 0, // track the number of times to find a playable game
			failedBuildMax: 10, // how many tries to find a playable game
			shownBoxes: [], // which boxes are showing answers
			number_set: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			grids: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			columns: [1, 2, 3, 4, 5, 6, 7, 8, 9],
			rows: ['A','B','C','D','E','F','G','H','I'],
			boxes: [],
			displayedBoxIds: [],
			remaining_boxes: {
				remaining_1: [],
				remaining_2: [],
				remaining_3: [],
				remaining_4: [],
				remaining_5: [],
				remaining_6: [],
				remaining_7: [],
				remaining_8: [],
				remaining_9: [],
			},
			selected_box: {
				id: '',
				row: '',
				column: '',
				grid: '',
				peers: {
					grid: [],
					rows: [],
					columns: [],
				}
			},
			state: {
				show_all_answers: false,
				highlights: false,
				boxes: {
					A1: { answer:0, guess: 0, available: [], row: 'A', column: 1, grid: 1, show: false },
					A2: { answer:0, guess: 0, available: [], row: 'A', column: 2, grid: 1, show: false },
					A3: { answer:0, guess: 0, available: [], row: 'A', column: 3, grid: 1, show: false },
					A4: { answer:0, guess: 0, available: [], row: 'A', column: 4, grid: 2, show: false },
					A5: { answer:0, guess: 0, available: [], row: 'A', column: 5, grid: 2, show: false },
					A6: { answer:0, guess: 0, available: [], row: 'A', column: 6, grid: 2, show: false },
					A7: { answer:0, guess: 0, available: [], row: 'A', column: 7, grid: 3, show: false },
					A8: { answer:0, guess: 0, available: [], row: 'A', column: 8, grid: 3, show: false },
					A9: { answer:0, guess: 0, available: [], row: 'A', column: 9, grid: 3, show: false },
					B1: { answer:0, guess: 0, available: [], row: 'B', column: 1, grid: 1, show: false },
					B2: { answer:0, guess: 0, available: [], row: 'B', column: 2, grid: 1, show: false },
					B3: { answer:0, guess: 0, available: [], row: 'B', column: 3, grid: 1, show: false },
					B4: { answer:0, guess: 0, available: [], row: 'B', column: 4, grid: 2, show: false },
					B5: { answer:0, guess: 0, available: [], row: 'B', column: 5, grid: 2, show: false },
					B6: { answer:0, guess: 0, available: [], row: 'B', column: 6, grid: 2, show: false },
					B7: { answer:0, guess: 0, available: [], row: 'B', column: 7, grid: 3, show: false },
					B8: { answer:0, guess: 0, available: [], row: 'B', column: 8, grid: 3, show: false },
					B9: { answer:0, guess: 0, available: [], row: 'B', column: 9, grid: 3, show: false },
					C1: { answer:0, guess: 0, available: [], row: 'C', column: 1, grid: 1, show: false },
					C2: { answer:0, guess: 0, available: [], row: 'C', column: 2, grid: 1, show: false },
					C3: { answer:0, guess: 0, available: [], row: 'C', column: 3, grid: 1, show: false },
					C4: { answer:0, guess: 0, available: [], row: 'C', column: 4, grid: 2, show: false },
					C5: { answer:0, guess: 0, available: [], row: 'C', column: 5, grid: 2, show: false },
					C6: { answer:0, guess: 0, available: [], row: 'C', column: 6, grid: 2, show: false },
					C7: { answer:0, guess: 0, available: [], row: 'C', column: 7, grid: 3, show: false },
					C8: { answer:0, guess: 0, available: [], row: 'C', column: 8, grid: 3, show: false },
					C9: { answer:0, guess: 0, available: [], row: 'C', column: 9, grid: 3, show: false },
					D1: { answer:0, guess: 0, available: [], row: 'D', column: 1, grid: 4, show: false },
					D2: { answer:0, guess: 0, available: [], row: 'D', column: 2, grid: 4, show: false },
					D3: { answer:0, guess: 0, available: [], row: 'D', column: 3, grid: 4, show: false },
					D4: { answer:0, guess: 0, available: [], row: 'D', column: 4, grid: 5, show: false },
					D5: { answer:0, guess: 0, available: [], row: 'D', column: 5, grid: 5, show: false },
					D6: { answer:0, guess: 0, available: [], row: 'D', column: 6, grid: 5, show: false },
					D7: { answer:0, guess: 0, available: [], row: 'D', column: 7, grid: 6, show: false },
					D8: { answer:0, guess: 0, available: [], row: 'D', column: 8, grid: 6, show: false },
					D9: { answer:0, guess: 0, available: [], row: 'D', column: 9, grid: 6, show: false },
					E1: { answer:0, guess: 0, available: [], row: 'E', column: 1, grid: 4, show: false },
					E2: { answer:0, guess: 0, available: [], row: 'E', column: 2, grid: 4, show: false },
					E3: { answer:0, guess: 0, available: [], row: 'E', column: 3, grid: 4, show: false },
					E4: { answer:0, guess: 0, available: [], row: 'E', column: 4, grid: 5, show: false },
					E5: { answer:0, guess: 0, available: [], row: 'E', column: 5, grid: 5, show: false },
					E6: { answer:0, guess: 0, available: [], row: 'E', column: 6, grid: 5, show: false },
					E7: { answer:0, guess: 0, available: [], row: 'E', column: 7, grid: 6, show: false },
					E8: { answer:0, guess: 0, available: [], row: 'E', column: 8, grid: 6, show: false },
					E9: { answer:0, guess: 0, available: [], row: 'E', column: 9, grid: 6, show: false },
					F1: { answer:0, guess: 0, available: [], row: 'F', column: 1, grid: 4, show: false },
					F2: { answer:0, guess: 0, available: [], row: 'F', column: 2, grid: 4, show: false },
					F3: { answer:0, guess: 0, available: [], row: 'F', column: 3, grid: 4, show: false },
					F4: { answer:0, guess: 0, available: [], row: 'F', column: 4, grid: 5, show: false },
					F5: { answer:0, guess: 0, available: [], row: 'F', column: 5, grid: 5, show: false },
					F6: { answer:0, guess: 0, available: [], row: 'F', column: 6, grid: 5, show: false },
					F7: { answer:0, guess: 0, available: [], row: 'F', column: 7, grid: 6, show: false },
					F8: { answer:0, guess: 0, available: [], row: 'F', column: 8, grid: 6, show: false },
					F9: { answer:0, guess: 0, available: [], row: 'F', column: 9, grid: 6, show: false },
					G1: { answer:0, guess: 0, available: [], row: 'G', column: 1, grid: 7, show: false },
					G2: { answer:0, guess: 0, available: [], row: 'G', column: 2, grid: 7, show: false },
					G3: { answer:0, guess: 0, available: [], row: 'G', column: 3, grid: 7, show: false },
					G4: { answer:0, guess: 0, available: [], row: 'G', column: 4, grid: 8, show: false },
					G5: { answer:0, guess: 0, available: [], row: 'G', column: 5, grid: 8, show: false },
					G6: { answer:0, guess: 0, available: [], row: 'G', column: 6, grid: 8, show: false },
					G7: { answer:0, guess: 0, available: [], row: 'G', column: 7, grid: 9, show: false },
					G8: { answer:0, guess: 0, available: [], row: 'G', column: 8, grid: 9, show: false },
					G9: { answer:0, guess: 0, available: [], row: 'G', column: 9, grid: 9, show: false },
					H1: { answer:0, guess: 0, available: [], row: 'H', column: 1, grid: 7, show: false },
					H2: { answer:0, guess: 0, available: [], row: 'H', column: 2, grid: 7, show: false },
					H3: { answer:0, guess: 0, available: [], row: 'H', column: 3, grid: 7, show: false },
					H4: { answer:0, guess: 0, available: [], row: 'H', column: 4, grid: 8, show: false },
					H5: { answer:0, guess: 0, available: [], row: 'H', column: 5, grid: 8, show: false },
					H6: { answer:0, guess: 0, available: [], row: 'H', column: 6, grid: 8, show: false },
					H7: { answer:0, guess: 0, available: [], row: 'H', column: 7, grid: 9, show: false },
					H8: { answer:0, guess: 0, available: [], row: 'H', column: 8, grid: 9, show: false },
					H9: { answer:0, guess: 0, available: [], row: 'H', column: 9, grid: 9, show: false },
					I1: { answer:0, guess: 0, available: [], row: 'I', column: 1, grid: 7, show: false },
					I2: { answer:0, guess: 0, available: [], row: 'I', column: 2, grid: 7, show: false },
					I3: { answer:0, guess: 0, available: [], row: 'I', column: 3, grid: 7, show: false },
					I4: { answer:0, guess: 0, available: [], row: 'I', column: 4, grid: 8, show: false },
					I5: { answer:0, guess: 0, available: [], row: 'I', column: 5, grid: 8, show: false },
					I6: { answer:0, guess: 0, available: [], row: 'I', column: 6, grid: 8, show: false },
					I7: { answer:0, guess: 0, available: [], row: 'I', column: 7, grid: 9, show: false },
					I8: { answer:0, guess: 0, available: [], row: 'I', column: 8, grid: 9, show: false },
					I9: { answer:0, guess: 0, available: [], row: 'I', column: 9, grid: 9, show: false },
				}
			}
		}
	},
	methods: {
		newGame(event) {

			if (event && this.getGuessCount() != 0 && !confirm(this.msg.reset)) {
				return
			}

			this.difficulty = this.getRandomPlayLevel()

			this.reset()

			let keep_going = true
			let next_box_id = ''

			this.rows.forEach(row => {
				this.columns.forEach(column => {
					this.boxes.push(row+column)
				})
			})

			this.setBoxWithRandomNumber('A1')

			do {
				if(next_box_id = this.getNextRemaining()) {
					keep_going = this.setBoxWithRandomNumber(next_box_id)
				} else {
					keep_going = false
				}
			} while (keep_going);

			if(!keep_going && this.readyBoxes < 81) {

				// Creating a playable puzzle is random,
				// so create a new game if it fails,
				// but only for the max allowed to avoid an endless loop
				if(this.failedBuildCount < this.failedBuildMax) {
					this.failedBuildCount++
					// console.log('This puzzle is not playable. Let\'s try a new game.')
					this.newGame()
				} else {
					alert(this.msg.bad_puzzle)
				}
			} else if(this.readyBoxes == 81) {
				this.play()
			}

		},
		getRandomPlayLevel() {
			let keys = Object.keys(this.playLevels)
			let random_key = keys[keys.length * Math.random() << 0]

			return {
				level: random_key,
				squares: this.playLevels[random_key]
			}
		},
		getNextRemaining() {
			if (this.remaining_boxes.remaining_1.length) {
				return this.remaining_boxes.remaining_1[this.remaining_boxes.remaining_1.length - 1]
			} else if (this.remaining_boxes.remaining_2.length) {
				return this.remaining_boxes.remaining_2[this.remaining_boxes.remaining_2.length - 1]
			} else if (this.remaining_boxes.remaining_3.length) {
				return this.remaining_boxes.remaining_3[this.remaining_boxes.remaining_3.length - 1]
			} else if (this.remaining_boxes.remaining_4.length) {
				return this.remaining_boxes.remaining_4[this.remaining_boxes.remaining_4.length - 1]
			} else if (this.remaining_boxes.remaining_5.length) {
				return this.remaining_boxes.remaining_5[this.remaining_boxes.remaining_5.length - 1]
			} else if (this.remaining_boxes.remaining_6.length) {
				return this.remaining_boxes.remaining_6[this.remaining_boxes.remaining_6.length - 1]
			} else if (this.remaining_boxes.remaining_7.length) {
				return this.remaining_boxes.remaining_7[this.remaining_boxes.remaining_7.length - 1]
			} else if (this.remaining_boxes.remaining_8.length) {
				return this.remaining_boxes.remaining_8[this.remaining_boxes.remaining_8.length - 1]
			} else if (this.remaining_boxes.remaining_9.length) {
				return this.remaining_boxes.remaining_9[this.remaining_boxes.remaining_9.length - 1]
			}
		},
		resetSelectedBox() {
			this.selected_box = {
				id: '',
				row: '',
				column: '',
				grid: '',
				peers: {
					grid: [],
					rows: [],
					columns: [],
				}
			}
		},
		selectedNextBoxToShow() {

			let available_box_ids = []

			this.boxes.forEach(box_id => {
				if(this.displayedBoxIds.indexOf(box_id) === -1) {
					available_box_ids.push(box_id)
				}
			})

			return this.getRandomNumber(available_box_ids)
		},
		reset() {

			this.you_won = false
			this.you_cheated = false
			this.guesses_remain = 81
			this.readyBoxes = 0
			this.shownBoxes = []
			this.boxes = []
			this.displayedBoxIds = []
			this.failedBuildCount = 0
			this.failedBuildMax = 10
			this.state.show_all_answers = false

			this.remaining_boxes.remaining_1 = []
			this.remaining_boxes.remaining_2 = []
			this.remaining_boxes.remaining_3 = []
			this.remaining_boxes.remaining_4 = []
			this.remaining_boxes.remaining_5 = []
			this.remaining_boxes.remaining_6 = []
			this.remaining_boxes.remaining_7 = []
			this.remaining_boxes.remaining_8 = []
			this.remaining_boxes.remaining_9 = []

			const num_set = [1, 2, 3, 4, 5, 6, 7, 8, 9]
			for(const box_id in this.state.boxes) {
				this.state.boxes[box_id].available = []
				this.state.boxes[box_id].answer = 0
				this.state.boxes[box_id].guess = 0
				this.state.boxes[box_id].show = false
				num_set.forEach(num => {
					this.state.boxes[box_id].available.push(num)
				});
			}

			this.resetSelectedBox()
		},
		doGuessesRemain() {
			let guess_max = 81 - this.difficulty.squares
			this.guesses_remain = guess_max - this.getGuessCount()
		},
		testAnswers() {

			this.you_won = false

			let unique_box_values = [];
			let box_id = '';
			let box_value = ''

			// Test rows
			let last_row = '';
			for(const row in this.rows) {
				if(last_row != this.rows[row]) {
					unique_box_values = []
					last_row = this.rows[row]
				}
				for(const column in this.columns) {
					box_id = this.rows[row]+this.columns[column]
					box_value = this.state.boxes[box_id].guess ? this.state.boxes[box_id].guess : this.state.boxes[box_id].answer
					if(unique_box_values.indexOf(box_value) !== -1) {
						this.guesses_remain--
						alert(this.msg.you_lose)
						return
					} else {
						unique_box_values.push(box_value)
					}
				}
			}

			// Test columns
			let last_column = '';
			for (const column in this.columns) {
				if (last_column != this.columns[column]) {
					unique_box_values = []
					last_column = this.columns[column]
				}
				for (const row in this.rows) {
					box_id = this.rows[row] + this.columns[column]
					box_value = this.state.boxes[box_id].guess ? this.state.boxes[box_id].guess : this.state.boxes[box_id].answer
					if (unique_box_values.indexOf(box_value) !== -1) {
						this.guesses_remain--
						alert(this.msg.you_lose)
						return
					} else {
						unique_box_values.push(box_value)
					}
				}
			}

			// Test grids
			for (const grid in this.grids) {
				console.log('Grid ', this.grids[grid])
				unique_box_values = []
				for(const box_id in this.state.boxes) {
					if (this.state.boxes[box_id].grid == this.grids[grid]) {
						box_value = this.state.boxes[box_id].guess ? this.state.boxes[box_id].guess : this.state.boxes[box_id].answer
						if (unique_box_values.indexOf(box_value) !== -1) {
							this.guesses_remain--
							alert(this.msg.you_lose)
							return
						} else {
							unique_box_values.push(box_value)
						}
					}
				}
			}

			this.you_won = true
		},
		getGuessCount() {

			let guess_count = 0

			for (const box_id in this.state.boxes) {
				if (this.state.boxes[box_id].guess) {
					guess_count++
				}
			}

			return guess_count
		},
		compareGuessesToAnswers() {
			let guesses = [];

		},
		setBoxWithRandomNumber(box_id) {

			const box = this.state.boxes[box_id];

			if(typeof box === 'undefined') {
				return false
			}
			const new_number = this.getRandomNumber(box.available)

			if (typeof new_number === 'undefined') {
				return false
			}

			const selected_box = {
				id: box_id,
				row: box.row,
				column: box.column,
				grid: box.grid,
			}

			this.selectedBox(selected_box)
			this.setBoxAnswer(box_id, new_number)

			this.readyBoxes++

			return true
		},
		play() {
			// alert('Let\'s play!')
		},
		getRandomNumber(number_set) {
			return number_set[(Math.random() * number_set.length) | 0]
		},
		setBoxAnswer(box_id, answer) {

			let next = ''

			if(this.shownBoxes.length < this.difficulty.squares) {

				do {
					next = this.selectedNextBoxToShow()
				} while (this.shownBoxes.indexOf(next) !== -1)

				this.shownBoxes.push(next)
				this.state.boxes[next].show = true
			}

			// set the answer
			this.state.boxes[box_id].answer = answer

			// remove all available
			this.state.boxes[box_id].available = []

			// set peers
			this.selected_box.peers.columns.forEach(box_id => {
				this.state.boxes[box_id].available = this.state.boxes[box_id].available.filter(obj => { return obj !== answer });
			});

			this.selected_box.peers.rows.forEach(box_id => {
				this.state.boxes[box_id].available = this.state.boxes[box_id].available.filter(obj => { return obj !== answer });
			});

			this.selected_box.peers.grid.forEach(box_id => {
				this.state.boxes[box_id].available = this.state.boxes[box_id].available.filter(obj => { return obj !== answer });
			});

			this.setRemainingBoxes()
		},
		setRemainingBoxes() {

			this.remaining_boxes.remaining_1 = []
			this.remaining_boxes.remaining_2 = []
			this.remaining_boxes.remaining_3 = []
			this.remaining_boxes.remaining_4 = []
			this.remaining_boxes.remaining_5 = []
			this.remaining_boxes.remaining_6 = []
			this.remaining_boxes.remaining_7 = []
			this.remaining_boxes.remaining_8 = []
			this.remaining_boxes.remaining_9 = []

			for(const box_id in this.state.boxes) {
				if(this.state.boxes[box_id].available.length == 9) {
					this.remaining_boxes.remaining_9.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 8) {
					this.remaining_boxes.remaining_8.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 7) {
					this.remaining_boxes.remaining_7.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 6) {
					this.remaining_boxes.remaining_6.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 5) {
					this.remaining_boxes.remaining_5.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 4) {
					this.remaining_boxes.remaining_4.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 3) {
					this.remaining_boxes.remaining_3.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 2) {
					this.remaining_boxes.remaining_2.push(box_id)
				} else if (this.state.boxes[box_id].available.length == 1) {
					this.remaining_boxes.remaining_1.push(box_id)
				}
			}
		},
		selectedBox(selected_box) {

			this.resetSelectedBox()

			this.selected_box.id = selected_box.id
			this.selected_box.row = selected_box.row
			this.selected_box.column = selected_box.column
			this.selected_box.grid = selected_box.grid
			this.setPeers()

			if (this.readyBoxes != 81 && selected_box.button) {
				const new_number = this.getRandomNumber(this.state.boxes[selected_box.id].available)
				this.setBoxAnswer(selected_box.id, new_number)
			}

			if(this.readyBoxes == 81) {
				this.doGuessesRemain()
			}
		},
		setPeers() {
			this.selected_box.peers.grid = []
			this.selected_box.peers.rows = []
			this.selected_box.peers.columns = []
			this.rows.forEach(row => {
				this.columns.forEach(column => {

					// peer rows
					if(this.selected_box.row == row && row+column != this.selected_box.id) {
						this.selected_box.peers.rows.push(row+column)
					}

					// peer columns
					if (this.selected_box.column == column && row + column != this.selected_box.id) {
						this.selected_box.peers.columns.push(row+column)
					}

					// peer grid
					if ((
						(this.selected_box.grid == 1 && ['A','B','C'].indexOf(row) !== -1) ||
						(this.selected_box.grid == 4 && ['D','E','F'].indexOf(row) !== -1) ||
						(this.selected_box.grid == 7 && ['G','H','I'].indexOf(row) !== -1)
					) && column <= 3) {
						if (this.selected_box.id != row+column) {
							this.selected_box.peers.grid.push(row+column)
						}
					} else if ((
						(this.selected_box.grid == 2 && ['A', 'B', 'C'].indexOf(row) !== -1) ||
						(this.selected_box.grid == 5 && ['D', 'E', 'F'].indexOf(row) !== -1) ||
						(this.selected_box.grid == 8 && ['G', 'H', 'I'].indexOf(row) !== -1)
					) && column >= 4 && column <= 6) {
						if (this.selected_box.id != row + column) {
							this.selected_box.peers.grid.push(row + column)
						}
					} else if ((
						(this.selected_box.grid == 3 && ['A', 'B', 'C'].indexOf(row) !== -1) ||
						(this.selected_box.grid == 6 && ['D', 'E', 'F'].indexOf(row) !== -1) ||
						(this.selected_box.grid == 9 && ['G', 'H', 'I'].indexOf(row) !== -1)
					) && column >= 7 && column <= 9) {
						if (this.selected_box.id != row + column) {
							this.selected_box.peers.grid.push(row + column)
						}
					}
				})
			})
		},
		toggleAnswers() {
			this.you_cheated = true
			this.state.show_all_answers = !this.state.show_all_answers
		},
		toggleHighlights() {
			this.state.highlights = !this.state.highlights
		}
	},
	mounted() {
		this.newGame()
	},
	watch: {},
	template: `
		<div id="sudoku-wrapper">
			<sudoku-grid v-for="(grid, index) in grids" :grid="index" :state="state" :selected_box="selected_box" @selectedBox="selectedBox" :class="{'selected':grid==selected_box.grid}"></sudoku-grid>
		</div>

		<div id="dashboard">
			<div id="new-game-wrapper">
				<button type="button" @click="newGame">{{ msg.btn.new_game }}</button>
				<button v-if="guesses_remain" type="button" @click="toggleAnswers"><span v-if="!state.show_all_answers">{{ msg.btn.cheat }}</span><span v-if="state.show_all_answers">{{ msg.btn.hide }}</span></button>
				<button v-if="!guesses_remain" type="button" @click="testAnswers">{{ msg.btn.test_answers }}</button>
				<button type="button" @click="toggleHighlights"><span v-if="!state.highlights">{{ msg.btn.show }}</span><span v-if="state.highlights">{{ msg.btn.hide }}</span> {{ msg.btn.highlights }}</button>
			</div>

			<div id="info-box-wrapper">
				<div id="info-box">
					Game level: {{ difficulty.level }}

					<div v-if="you_won" id="did-i-win">
						<h1>{{ msg.you_won }}</h1>
						<h4 v-if="you_cheated">{{ msg.cheated }}</h4>
					</div>

					<div v-if="state.highlights">
						{{ msg.info.selected }}: {{ selected_box.id }}<br>
						{{ msg.info.grid }}: {{ selected_box.grid }}<br>
						{{ msg.info.row }}: {{ selected_box.row }}<br>
						{{ msg.info.column }}: {{ selected_box.column }}<br>
						{{ msg.info.grid_peers }}: {{ selected_box.peers.grid }}<br>
						{{ msg.info.row_peers }}: {{ selected_box.peers.rows }}<br>
						{{ msg.info.column_peers }}: {{ selected_box.peers.columns }}
					</div>
				</div>
			</div>
		</div>

		<div id="github"><a href="https://github.com/stillatmylinux/sudoku">github.com/stillatmylinux/sudoku</a></div>
`
}