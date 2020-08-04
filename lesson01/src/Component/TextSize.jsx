import React, { Component } from "react";

class TextSize extends Component {
  handleClick(isAdd) {
   
      if (isAdd && this.props.Size < this.props.maxSize ) {
        this.props.passSize(this.props.Size + 1);
      } else if(isAdd ==false  && this.props.Size> this.props.minSize) {
        this.props.passSize(this.props.Size - 1);
      }
   
  }

  render() {
    return (
      <div className=" p3 mt-3">
        <div className="bg-warning text-white border border-warning">
          Set Size
        </div>
        <div className="border border-warning">
          <button
            className="btn btn-success m-1"
            type="button"
            onClick={() => {
              this.handleClick(true);
            }}
          >
            +
          </button>
          <button
            className="btn btn-danger m-1 "
            type="button"
            onClick={() => {
              this.handleClick(false);
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default TextSize;
