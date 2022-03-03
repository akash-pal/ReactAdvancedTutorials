/*Render props
https://www.robinwieruch.de/react-render-props
 */
import React, { Component } from "react";

const Rupee = ({ amount }) => <div>Rupee: {amount * 70}</div>;
const Dollar = ({ amount }) => <div>Dollar: {amount}</div>;

export default class CurrencyConverter extends Component {
  render() {
    return (
      // 1. render as function
      // <Amount>
      //   {(amount) => (
      //     <>
      //       <Dollar amount={amount} />
      //       <Rupee amount={amount} />
      //     </>
      //   )}
      // </Amount>
      // 2. children as function
      <Amount
        render={(amount) => (
          <>
            <Dollar amount={amount} />
            <Rupee amount={amount} />
          </>
        )}
      />
    );
  }
}

class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  increment = () => {
    this.setState((state) => ({ amount: state.amount + 1 }));
  };

  decrement = () => {
    this.setState((state) => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div>
        <p>Currency Converter</p>
        <p>Dollar: {this.state.amount}</p>
        {
          //this.props.children(this.state.amount)
          this.props.render(this.state.amount)
        }
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
