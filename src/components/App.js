import React, { Component } from "react";
import { connect } from 'react-redux';
import { setActiveSession, updateCounter } from '../actions';
import "../App.css";

class App extends Component {

  dispatchSetActiveSession = e => {
    const activeSession = e.target.value;
    this.props.setActiveSession(activeSession);
  };

  dispatchUpdateCounter = e => {
      const type = e.target.dataset.type;
      const changeAmount = type === 'INCREASE_COUNTER' ? 1 : -1;
      this.props.updateCounter(type, changeAmount);
  };

  render() {
    const { days, hours, minutes, seconds, activeSession } = this.props;

    return (
      <div className="App">
        <header>
          <h4 className="App__subheader">BOOK NAME</h4>
          <h1 className="App__header">Understanding Redux - 1</h1>
        </header>

        <section className="Counter">
          <h4 className="App__subheader">TOTAL TIME SPENT ON THE PROJECT</h4>

          <main className="Counter--main">
            <div className="Counter--main__session">
              <span className="Counter__text--grey">ACTIVE SESSION: </span>
              <select
                className="Counter__text--grey"
                onChange={this.dispatchSetActiveSession}
                value={activeSession}
              >
                <option>DAYS</option>
                <option>HOURS</option>
                <option>MINUTES</option>
                <option>SECONDS</option>
              </select>
            </div>

            <div className="Counter--main__values">
              <div>
                <span className="App__text--white Counter__text--large">
                  {days}
                </span>
                <span className="Counter__text--grey">DAYS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {hours}
                </span>
                <span className="Counter__text--grey">HOURS</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {minutes}
                </span>
                <span className="Counter__text--grey">MINUTES</span>
              </div>

              <div className="Counter__separator">:</div>

              <div>
                <span className="App__text--white Counter__text--large">
                  {seconds}
                </span>
                <span className="Counter__text--grey">SECONDS</span>
              </div>
            </div>
          </main>
          <div className="App__buttons">
            <button className="App__text--white" onClick={this.dispatchUpdateCounter} data-type="INCREASE_COUNTER">
              INCREASE
            </button>
            <button className="App__text--white" onClick={this.dispatchUpdateCounter
            } data-type="DECREASE_COUNTER">
              DECREASE
            </button>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  days: state.days,
  hours: state.hours,
  minutes: state.minutes,
  seconds: state.seconds,
  activeSession: state.activeSession
});

const mapDispatchToProps = {
  setActiveSession,
  updateCounter
};

// const mapDispatchToProps = (dispatch) => ({
//   setActiveSession: (activeSession) => dispatch(setActiveSession(activeSession)),
//   updateCounter: (type, changeAmount) => dispatch(updateCounter(type, changeAmount))
// })

export default connect(mapStateToProps, mapDispatchToProps)(App);
