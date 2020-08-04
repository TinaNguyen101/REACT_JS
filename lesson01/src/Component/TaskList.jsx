import React, { Component } from "react";
import TaskItem from "./TaskItem.jsx";
class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName :"",
      filterStatus : -1
    };
  }
  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    );
    this.setState({
      [name]:value
    });
  }
  render() {
    var { Tasks } = this.props;
    var { filterName,filterStatus } = this.state;
    var elmTask = Tasks.map((Task, index) => {
      return (
        <TaskItem
          key={Task.id}
          index={index}
          Task={Task}
          onUpdStatus2={this.props.onUpdStatus1}
          onEdit2={this.props.onEdit1}
          onDelete2={this.props.onDelete1}
        ></TaskItem>
      );
    });
    return (
      <div className="table-responsive mt-3">
        <table className="table">
          <thead>
            <tr className="text-info">
              <th scope="col">#</th>
              <th scope="col">Task Name</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Task Name"
                  name="filterName"
                  value={filterName}
                  onChange={this.onChange}
                />
              </td>
              <td>
                <select className="custom-select "
                name="filterStatus"
                value={filterStatus}
                onChange={this.onChange}>
                  <option selected>All..</option>
                  <option value={1}>Active</option>
                  <option value={2}>Hidden</option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTask}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
