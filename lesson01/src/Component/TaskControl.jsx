

import React, { Component } from "react";
import TaskSearch from "./TaskSearch.jsx";
import TaskSort from "./TaskSort.jsx";
class TaskControl extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    return (
        <div className="row">
        {/* Search */}
        <TaskSearch onSearch={this.props.onSearch}></TaskSearch>
        {/* Sort */}
        <TaskSort onSort={this.props.onSort}
        sortName={this.props.sortName}
        sortby={this.props.sortby}></TaskSort>
        </div>
                 
      );
  }
}
export default TaskControl;
