import React from "react";

export default class Testing extends React.Component {
  render() {
    return (
      <>
        <div>Hello world</div>
        <div data-testid="title">Reactjs Testing</div>
        <ul className="animals">
          <li>Cat</li>
          <li>Whale</li>
          <li>Lion</li>
          <li>elephant</li>
          <li>Rhino</li>
        </ul>
      </>
    );
  }
}
