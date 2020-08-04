import React, { Component } from "react";

class TaskAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:'',
      name: "",
      status: 0,
    };
  }
  componentWillMount(){
    if(this.props.task){
      this.setState({
        id:this.props.task.id,
        name:this.props.task.name,
        status:this.props.task.status,
      })
    }
  
   };
  componentWillReceiveProps(nextProp){
   if(nextProp && nextProp.task){
     this.setState({
       id:nextProp.task.id,
       name:nextProp.task.name,
       status:nextProp.task.status,
     })
   }else if(nextProp && nextProp.task === null){
    this.setState({
      id:'',
      name: "",
      status: 0,
    })
   }
  };

  onClose = () => {
    this.props.onClose();
  };

  onChange = (e) => {
    var target = e.target;
    var name1 = target.name;
    var value1 = target.value;
    if(name1==='status'){
      value1 = target.value ==='1'?1:2;
    } 
    this.setState({
      [name1]: value1,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.props.onSubmit(this.state);
    this.onClear();
    this.onClose();
  };
  onClear = () =>{
    this.setState({
      id:"",
      name: "",
      status: 0,
    })
  }

  render() {
    var { id } = this.state;
    return (
      <div className="card pb-3 border border-info">
        <form onSubmit={this.onSubmit}>
          <div class="card-header bg-info font-weight-bold text-light">
          { id !== '' ? 'Edit Task' : 'Add Task'}  
            <span
              className="float-right"
              style={{ cursor: "pointer" }}
              onClick={this.onClose}
            >
              x
            </span>
          </div>
          <div className="card-body">
            <div className="card-text">
              <div className="form-group">
                <label htmlFor="txtTaskName" className="text-info">
                  Task Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  placeholder="Task Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="txtTaskStatus" className="text-info">
                  Status
                </label>
                <select
                  className="custom-select my-1 mr-sm-2"
                  value={this.state.status}
                  onChange={this.onChange}
                  name="status"
                >
                  <option  value={-1} selected>Choose...</option>
                  <option value={1}>Active</option>
                  <option value={2}>Hidden</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-success float-right ml-2">
              Save
            </button>
            <button type="button" onClick={this.onClear} className="btn btn-danger float-right">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default TaskAdd;
