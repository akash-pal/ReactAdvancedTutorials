import React, { Component } from "react";
import PropTypes from "prop-types";
import { ThemeContent } from "./theme-context";
import ChangeTheme from "./ChangeTheme";

class Main extends Component {
  constructor(props) {
    super(props);
    //console.log("props", props);
    //console.log("this.props", this.props);
    this.state = { name: "Akash", age: 29, error: false };
    this.triggerError = this.triggerError.bind(this);
    this.getDetails = this.getDetails.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDervivedStateFromProps", state, props);
    return { ...props, ...state };
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(props, state) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getDetails() {
    console.log("render");
    return `Age is ${this.state.age}`;
  }

  triggerError() {
    this.setState((state) => ({ error: !state.error }));
  }

  render() {
    let theme = this.context.theme;
    if (this.state.error) {
      throw new Error("triggerd error");
    }
    return (
      <>
        <button
          style={{
            backgroundColor: theme.background,
            color: theme.foreground
          }}
          onClick={this.triggerError}
        >
          Trigger Error
        </button>
        <ChangeTheme />
        <div data-testid="details">{this.getDetails()}</div>
      </>
    );
  }
}

Main.contextType = ThemeContent;

Main.propTypes = {
  age: PropTypes.number.isRequired
};

Main.defaultProps = {
  age: 0
};

export default Main;
