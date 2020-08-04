import React, { Component } from "react";

class TaskSearch extends Component {
  constructor(props) {
    super(props);
    this.state={
      keyword : ""
    }
  }

  onChange = (event) =>{
    var target = event.target;
    this.setState({
      keyword : target.value
    });
  }
  onSearch = () =>{
    this.props.onSearch(this.state.keyword);
  }
  render() {
    return (
        <div class="input-group col-10">
        <input
          type="keyword"
          class="form-control"
          aria-describedby="button-addon2"
          value={this.state.keyword}
          onChange={this.onChange}
        />
        <div class="input-group-append">
          <button
            class="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={this.onSearch}
          >
            
            Search
          </button>
        </div>
      </div>
      );
  }
}
export default TaskSearch;
