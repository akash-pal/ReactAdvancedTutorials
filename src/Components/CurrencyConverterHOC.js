/*Render props
https://www.robinwieruch.de/react-render-props
 */
import React, { Component } from "react";

const Rupee = ({ amount }) => <div>Rupee: {amount * 70}</div>;
const Dollar = ({ amount }) => <div>Dollar: {amount}</div>;

const withAmount = (currencyComponents) =>
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
          {currencyComponents.map((CurrencyComponent) => (
            <CurrencyComponent amount={this.state.amount} />
          ))}
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </div>
      );
    }
  };

const CurrenciesWithAmount = withAmount([Rupee, Dollar]);

const CurrencyConverter = () => <CurrenciesWithAmount />;

export default CurrencyConverter;
