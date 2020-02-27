import React from 'react';
import { connect } from 'react-redux';
import { flagChanged } from '../../actions';
import './buttons.css';

//Dynamic rendering buttons
function Buttons(props) {
  
  let buttons = [];
  let counter = 0;
  let buttonsObject = props.answer;
  if (Object.keys(props.question).length !== 0) {
    buttonsObject = props.question
  }

  for (let p in buttonsObject) {
    counter++
    const clsNm = "btn action-button btn-" + p + " " + p;
    const flag = p.toString();
    const el = (
    <div key={counter}>
      <input onClick={() => props.flagChanged(flag)}
        type="radio" name="options" id={"option" + counter} autoComplete="off" />
        <label htmlFor={"option" + counter} className={clsNm} >
        {p.toUpperCase()}
      </label>
    </div>);
    buttons.push(el);
  }

  return (
    <div className="action-buttons btn-group-vertical btn-group-toggle" data-toggle="buttons">
      {buttons}
    </div>
  )
}

const mapDispatchToProps = {
  flagChanged
}

const mapStateToProps = ({question, answer}) => {
  return { question, answer };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);