import React from 'react'
import './chart.css';
import template from '../../data/template';
import { handAddedtoAnswer } from '../../actions'
import { connect } from 'react-redux';

class Chart extends React.Component {
  constructor() {
    super();
    this.el = document.getElementById("root");
    this.el.addEventListener('mouseout', (e) => {
      if (e.target.className.indexOf("chart-cell") !== -1 && e.buttons & 1) {
        this.props.handAddedtoAnswer(e.target.innerHTML);
      }
    });
  };

  coloringHands = () => {
    //TODO : REFACTOR THIS SHIT
    const { answer: {allin, raise, fold, iso, isos, limp, check} } = this.props;
    const chart = document.getElementById('chart');
    const defaultClassName = 'chart-cell';
    
    for (let i = 0; i < 169; i++) {
      if (allin.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' allin pressed';
      } else if (raise.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' raise';
      } else if (fold.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' fold';
      } else if (iso.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' iso';
      } else if (isos.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' isos';
      } else if (limp.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' limp';
      } else if (check.indexOf(chart.children[i].id) >= 0) {
        chart.children[i].className = defaultClassName + ' check';
      }else {
        chart.children[i].className = defaultClassName;
      }
    }
  }

  componentDidUpdate() {
    this.coloringHands();
  }

  render() {
    const hands = template().map((hand, index) => {
      const id = `${hand}`;
      return (
        <div
          id={id}
          className="chart-cell"
          key={index}
          onClick={() => this.props.handAddedtoAnswer(hand)}
        >
          {hand}
        </div>
      );
    });
    return (
      <div id="chart" className="chart">
        {hands}
      </div>
    );
  }
};

const mapStateToProps = ({ answer, flag }) => {
  return { answer, flag };
}
const mapDispatchToProps = {
  handAddedtoAnswer,
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);