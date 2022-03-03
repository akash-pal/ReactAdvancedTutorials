import React, { Component, Children, cloneElement } from "react";

class Tabs extends Component {
  render() {
    return Children.map(this.props.children, (child) => {
      return cloneElement(child, {
        onClick: this.props.onClick
      });
    });
  }
}

function ReactClone() {
  const onClick = function (e) {
    console.log(e.target.value);
  };

  return (
    <Tabs onClick={onClick}>
      <button value="Tab 1">Tab 1</button>
      <button value="Tab 2">Tab 2</button>
      <button value="Tab 3">Tab 3</button>
    </Tabs>
  );
}

export default ReactClone;
