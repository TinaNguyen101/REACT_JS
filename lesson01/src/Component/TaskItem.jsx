import React, { Component } from "react";

class TaskItem extends Component {
  onUpdStatus3 = () => {
    this.props.onUpdStatus2(this.props.Task.id);
  };
  onEdit3 = () => {
    this.props.onEdit2(this.props.Task.id);
  };
  onDelete3 = () => {
    this.props.onDelete2(this.props.Task.id);
  };
  render() {
    var { Task } = this.props;
    return (
      <tr>
        <th scope="row">{Task.id}</th>
        <td>{Task.name}</td>
        <td>
          <span
            style={{ cursor: "pointer" }}
            onClick={this.onUpdStatus3}
            className={
              Task.status === 1
                ? "badge badge-pill badge-info"
                : "badge badge-pill badge-secondary"
            }
          >
            {Task.status === 1 ? "Active" : "Hidden"}{" "}
          </span>
        </td>
        <td>
          <button
            className="btn btn-warning mr-2 btn-sm"
            type="button"
            onClick={this.onEdit3}
          >
            Edit
          </button>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={this.onDelete3}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;
