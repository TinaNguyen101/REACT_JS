import React, { Component } from "react";

class Result extends Component {
    setSize(){
        return {
            "font-size": this.props.textSize
        };
    }
  render() {
    return (
        <div className=" p3 ">
        <div className="bg-info text-white border border-info">
          Result
        </div>
        <div className={" border border-info text-" +this.props.textColor} 
        style={this.setSize()}>
            {" text-" +this.props.textColor} 
            <br/>
            {" size-" +this.props.textSize +"px"} 
      </div>
      </div>
         
     
    );
  }
}

export default Result;
