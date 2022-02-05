import logo from "./logo.svg";
import React from "react";
import "./App.css";
export default class extends React.Component {
  constructor() {
    super();
    this.state = {
      RadioValue: "",
      Radiotext:"",
      DateText:"",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>no. 1</p>
          <div>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"A" === this.state.RadioValue}
                onChange={(e) => {
                  this.setState({ RadioValue: "A" });
                }}
              />
              Radio A
            </label>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"B" === this.state.RadioValue}
                onChange={(e) => {
                  this.setState({ RadioValue: "B" });
                }}
              />{" "}
              Radio B
            </label>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"C" === this.state.RadioValue}
                onChange={(e) => {
                  this.setState({ RadioValue: "C" });
                }}
              />{" "}
              Radio C
            </label>
          </div>
          <p>no. 2 (a)</p>
          <div>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"D" === this.state.Radiotext}
                onChange={(e) => {
                  this.setState({ Radiotext: "D" });
                }}
              />
            </label>
              <input
                name="r1"
                type="text"
                disabled={this.state.Radiotext == "D"?false:true}
              />
              </div>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"E" === this.state.Radiotext}
                onChange={(e) => {
                  this.setState({ Radiotext: "E" });
                }}
              />
              Radio B
            </label>
          <p>no. 2 (b)</p>
          <div>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"F" === this.state.DateText}
                onChange={(e) => {
                  this.setState({ DateText: "F" });
                }}
              />
            </label>
              <input
                name="r1"
                type="date"
                disabled={this.state.DateText == "F"?false:true}
              />
              </div>
            <label>
              <input
                name="r1"
                type="radio"
                checked={"G" === this.state.DateText}
                onChange={(e) => {
                  this.setState({ DateText: "G" });
                }}
              />
              Radio B
            </label>
        </header>
      </div>
    );
  }
}
