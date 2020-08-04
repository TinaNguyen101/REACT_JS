import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(color) {
    this.props.passColor(color);
  }

  render() {
    var colorLst = ["primary", "secondary", "success"];
    var elementColor = colorLst.map((colorText, index) => {
      return (
        <button
          key={index}
          className={"m-1 h-25 btn btn-" + colorText}
          onClick={() => {
            this.handleClick(colorText);
          }}
        ></button>
      );
    });

    return (
      <div className=" p3 ">
        <div className="bg-primary text-white border border-primary">
          Set Color
        </div>
        <div className="border border-primary">{elementColor}</div>
      </div>
    );
  }
}

export default ColorPicker;
