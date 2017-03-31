import React, {Component} from 'react';
import Day from './day';

export default class extends Component {
  static displayName = "Calendar"
  constructor(props) {
    super(props);
  }

  state = {
    events: [],
    reminders: []
  }

  get year() {
		const currentYear = (new Date()).getFullYear();
		let year = [[],[],[],[],[],[],[],[],[],[],[],[]];
		for (let i = 1; i<= 31; i++){
			year[0].push(i)
		}
		if (currentYear % 4 === 0) {
			for (let j = 1; j<= 29; j++){
				year[1].push(j)
			}
		} else {
			for (let k = 1; k<= 28; k++){
				year[1].push(k)
			}
		}
		for (let l = 1; l<= 31; l++){
			year[2].push(l)
		}
		for (let m = 1; m<= 30; m++){
			year[3].push(m)
		}
		for (let n = 1; n<= 31; n++){
			year[4].push(n)
		}
		for (let o = 1; o<= 30; o++){
			year[5].push(o)
		}
		for (let p = 1; p<= 31; p++){
			year[6].push(p)
		}
		for (let q = 1; q<= 31; q++){
			year[7].push(q)
		}
		for (let r = 1; r<= 30; r++){
			year[8].push(r)
		}
		for (let s = 1; s<= 31; s++){
			year[9].push(s)
		}
		for (let t = 1; t<= 30; t++){
			year[10].push(t)
		}
		for (let u = 1; u<= 31; u++){
			year[11].push(u)
		}
		let initOffset = new Date((new Date()).getFullYear(), 0, 0).getDay();
		for (let x = 0; x<initOffset; x++){
			year[0].unshift('offset');
		}
    return year;
  }

  handleDayClick = (i, mI) => {
		console.log(i, mI);
	}

	componentDidMount() {
		let currentDate = new Date();
		let currentDay = currentDate.getDate();
		let currentMonth = currentDate.getMonth();
		const elem = document.querySelector(`#month-${currentMonth}-day-${currentDay}`);
		elem.scrollIntoView({
			behavior: "smooth"
		});
		elem.classList.add('is-current');
		elem.classList.toggle('highlight');
		window.setTimeout(_ => {
				elem.classList.toggle('highlight');
			},
			1500
		);
	}

  render = _ => (
    <article className="calendar">
			{(this.year).map((month, monthIndex) => {
				return (
					month.map((day, index) => {
						index += 1;
						if (day === "offset") {
							return (
								<div
									className="day is-offset"
									key={index}
									data-id={"offset"}
								/>
							)
						} else {
							return (
								<Day
									day={day}
									month={monthIndex}
									key={`${monthIndex}-${day}`}
									onClick={_ => this.handleDayClick(day, monthIndex)}
									onKeyDown={ e => {
										(e.key === "Enter" || e.key === "Space") && 
											this.handleDayClick(day, monthIndex)
									}}
								/>

							)
						}
					})
				)
			})}
      <style jsx>{`
        .calendar {
          /* styling needed for parents layout */
          grid-row: 1 / 2;
          /* set up week grid */
          /* on mobile we want to just have a day like agenda */ 
          /* on tablet maybe 3 days */
          /* on dexktop a full week */
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr;

          overflow-y: scroll;
        }

        :global(.day:not(.is-offset)) {
          height: 100vh;
					border: solid var(--gray);
					border-width: 0 3px 0 0;

					padding: 1em;
        }

				:global(.is-offset) {
					display: none;
				}

        @media screen and (min-width: 600px) {
          .calendar {
						grid-template-rows: 100vh;
            grid-template-columns: repeat(366, 33.333vw);
						border-bottom: solid 3px var(--gray);
          }
        }

        @media screen and (min-width: 1200px) {
          .calendar {
            /* styles need for parent styles */
            grid-row: 1 / 2;

            grid-template-columns: repeat(7, 1fr);
            grid-template-rows: repeat(52, minmax(30px, calc(100vh / 4)));
          }
          :global(.day) {
            height: auto;
          }
					:global(.is-offset) {
						display: auto;
					}
        }
      `}</style>
    </article>
  )
}