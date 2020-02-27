import React from 'react';
import { connect } from 'react-redux';
import { chartFetched, clearAnswer } from '../../actions';
import Buttons from '../buttons/buttons';
import Chart from '../chart/chart';
import withChartService from '../hoc/with-chart-service';
import './App.css';

function App(props) {

  function checkAnswer() {
    const { answer, question } = props;

    //Initializing the auxiliary objects
    let result = {};
    let unnecessary = {};
    let missing = {};
    let idxs = {};

    //Creating right structure to auxiliary objects
    for (let p in question) {

      unnecessary[p] = [];
      missing[p] = [];
      idxs[p] = [];
      result[p] = "";
    }

    //Checking what hands we are indicated correctly
    for (let p in question) {
      let handsTotal = question[p].length;

      answer[p].forEach(hand => {
        question[p].indexOf(hand) >= 0 ? idxs[p].push(question[p].indexOf(hand)) : unnecessary[p].push(hand);
      });

      result[p] = `${idxs[p].length}/${handsTotal} "hands", your accuracy is ${(idxs[p].length / handsTotal * 100).toFixed(2)}% `
    }

    //Checking if we missed some hands in our answer
    for (let p in question) {
      question[p].forEach((hand, index) => {
        if (idxs[p].indexOf(index) < 0) {
          missing[p].push(hand);
        }
      })
    }
    console.log(result);
    console.log("----- Your errors ------ ");
    console.log("Unnecessary: ", unnecessary);
    console.log("Missing: ", missing);
  }

  return (
    <div className="App container">
      <div>Hello</div>
      <div className="row">
        <Chart />
        <Buttons />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => checkAnswer()}>
        Сравнить
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => { props.clearAnswer() }
        }>
        Очистить
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => { props.chartFetched(props.chartService.getQuestion()) }
        }>
        Начать тест (Загрузить чарт в вопрос)
      </button>
    </div>
  );
}

const mapStateToProps = ({ answer, question }) => {
  return { answer, question };
}
const mapDispatchToProps = {
  clearAnswer,
  chartFetched,
}

export default connect(mapStateToProps, mapDispatchToProps)(withChartService()(App));
