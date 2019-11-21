import React from 'react'
import './chart.css';
import withChartService from '../hoc/with-chart-service';
import template from '../../data/template';
import { handAddedtoAnswer, flagChanged } from '../../actions'
import { connect } from 'react-redux';

class Chart extends React.Component {
  constructor() {
    super();
    this.el = document.getElementById("root");

    this.el.addEventListener('mouseout', (e) => {
      if (e.target.className.indexOf("chart-cell") !== -1 && e.buttons & 1) {
        this.handSelector(e.target.innerHTML, e.target.id);
      }
    });
  };

  checkAnswer = () => {
    const { answer, question } = this.props;
    console.log(question, answer);
  }

  handSelector = (hand, id) => {
    const { handAddedtoAnswer, flag } = this.props;
    document
      .getElementById(id)
      .classList.add(flag);
    handAddedtoAnswer(hand);
  };

  render() {
    const hands = template().map((hand, index) => {
      const id = `${hand}`;
      return (
        <div
          id={id}
          className="chart-cell"
          key={index}
          onClick={() => this.handSelector(hand, id)}
        >
          {hand}
        </div>
      );
    });

    return (
    <>
      <div className="chart">
        {hands}
      </div>
        <button 
          type="button" 
          className="btn btn-primary"
          onClick={() => this.checkAnswer()}>
          Сравнить
        </button>
        <button
          type="button"
          className="btn btn-info"
          onClick={() => this.props.changeFlag('allin')}>
          PUSH
        </button>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => this.props.changeFlag('raise')}>
          RAISE
        </button>
    </>
    );
  }
};

const mapStateToProps = ({ answer, question, flag }) => {
  return { answer, question, flag };
}
const mapDispatchToProps = (dispatch) => {
  return {
    handAddedtoAnswer: (hand, flag) => dispatch(handAddedtoAnswer(hand, flag)),
    changeFlag: (flag) => dispatch(flagChanged(flag)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withChartService()(Chart));