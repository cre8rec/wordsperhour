import React from "react";
import styled from "styled-components";
import MyForm from "../Form/MyForm";
import { Login } from "../Components/loginButton";




const DisplayContainer = styled.div`
  width: 250px;
  height: 90vh;
  background-color: white;
  min-width: 180px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  z-index: 5;
  min-height: 500px;

  border-radius: 9px;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  box-shadow: 14px 14px 28px #ffffff, -14px 14px 28px #e8e8e8;

  position: relative;
  top: 5vh;
  color: #07461f;
`;

const newSum = (key) => {
  return this.reduce((a, b) => a + (b[key] || 0), 0);
};

export class DisplayData extends React.Component {
  render() {
    const arr = this.props.entries;

    const wordsTotal = arr.reduce(function (prev, cur) {
      return parseInt(prev) + parseInt(cur.words);
    }, 0);

    const hoursTotal = arr.reduce(function (prev, cur) {
      return parseInt(prev) + parseInt(cur.hours);
    }, 0);

    if (wordsTotal === 0) {
      var wordsPerHour = 0;
    } else {
      var wordsPerHour = parseFloat(wordsTotal / hoursTotal).toFixed(1);
    }

    return (
      <>
        <DisplayContainer>
          <Login  />

          <h2>
            Total Words
            <br />
            {wordsTotal}
          </h2>

          <h2>
            Total Hours
            <br />
            {hoursTotal}
          </h2>

          <h2>
            Words / Hour
            <br />
            {wordsPerHour}
          </h2>
        </DisplayContainer>
      </>
    );
  }
}
