import React, {Component} from 'react';

const getMonthNameFromMonth = (month) => {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
}

class Day extends Component {
  render = () => {
    const {day, month, onClick, onKeyDown} = this.props;
    return (
      <div
        id={`month-${month}-day-${day}`}
        role="button"
        className="day"
        data-id={day}
        data-month={month}
        onClick={_ => onClick()}
        onKeyDown={e => onKeyDown(e)}
        className="day"
      >
        <h3 className="day__title">{day} - <span className="day__month">{getMonthNameFromMonth(month)}</span></h3>
        <style jsx>{`
          .day:not(.is-offset) {
            height: 100vh;
            border: solid var(--gray);
            border-width: 0 3px 0 0;

            padding: 1em;
          }

          :global(.highlight) {
            outline: solid var(--a) 5px;
          }
          :global(.is-current) .day__title {
            color: var(--b);
          }

          @media screen and (min-width: 1200px) {
            .day.day.day {
              padding: .5em;
              height: auto;
              border-width: 1px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Day;