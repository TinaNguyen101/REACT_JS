import React, { Component } from "react";
// import ColorPicker from "./Component/ColorPicker.jsx";
// import Result from "./Component/Result.jsx";
// import TextSize from "./Component/TextSize.jsx";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       colorUpd: "danger",
//       sizeUpd: 8,
//     };
//   }
//   changeColor = (value) => {
//     this.setState({ colorUpd: value });
//   };

//   changeSize = (value) => {
//     this.setState({ sizeUpd: value });
//   };

//   render() {
//     return (
//       <div className="App ">
//         <h1>Setting Text Color</h1>
//         <div className="row m-1">
//           <div className="col-3 ">
//             <ColorPicker passColor={this.changeColor}></ColorPicker>
//             <TextSize
//               minSize="8"
//               maxSize="20"
//               Size={this.state.sizeUpd}
//               passSize={this.changeSize}
//             ></TextSize>
//           </div>
//           <div className="col-7 ">
//           <Result
//             textColor={this.state.colorUpd}
//             textSize={this.state.sizeUpd}
//           ></Result>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// task manager
import TaskAdd from "./Component/TaskAdd.jsx";
import TaskControl from "./Component/TaskControl.jsx";
import TaskList from "./Component/TaskList.jsx";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tasks: [],
      isDisplayForm: true,
      TaskEditing: "",
      filter:{
        name :"",
        status : -1
      },
      keyword:"",
      sort:{
        Name:"",
        By:1
      }
    };
  }
  componentWillMount() {
    if (localStorage && localStorage.getItem("task")) {
      var _task = JSON.parse(localStorage.getItem("task"));
      this.setState({ Tasks: _task });
    }
  }

  onGenerate = () => {
    var _tasks = [
      {
        id: "1",
        name: "sample 1",
        status: 1,
      },
      {
        id: "2",
        name: "sample 2",
        status: 2,
      },
    ];
    this.setState({ Tasks: _tasks });
    localStorage.setItem("task", JSON.stringify(_tasks));
  };
  onToggleForm = () => {
    if(this.state.isDisplayForm && this.state.TaskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        TaskEditing: null,
      });
    }
    else{
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        TaskEditing: null,
      });
    
  }};
 
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
    });
  };
  onShowForm = () => {
    this.setState({
      isDisplayForm: true,
    });
  };
  onSubmitParent = (data) => {
    var { Tasks } = this.state;
    if (data.name !== "") {
      if (data.id === "") {
        data.id = Tasks.length + 1;
        Tasks.push(data);
      } else {
        var index = this.findIndex(data.id);
        Tasks[index] = data;
      }
      this.setState({
        Tasks: Tasks,
        TaskEditing: null,
      });
      localStorage.setItem("task", JSON.stringify(Tasks));
    }
  };
  onUpdStatus = (id) => {
    var { Tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      Tasks[index].status = Tasks[index].status === 1 ? 2 : 1;
      this.setState({
        Tasks: Tasks,
      });
      localStorage.setItem("task", JSON.stringify(Tasks));
    }
  };
  onDelete = (id) => {
    var { Tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      Tasks.splice(index, 1);
      this.setState({
        Tasks: Tasks,
      });
      localStorage.setItem("task", JSON.stringify(Tasks));
    }
  };
  onEdit = (id) => {
    var { Tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      this.setState({
        TaskEditing: Tasks[index],
      });

      this.onShowForm();
    }
  };
  findIndex = (id) => {
    var { Tasks } = this.state;
    var result = -1;
    Tasks.forEach((Task, index) => {
      if (Task.id === id) {
        result = index;
      }
    });
    return result;
  };
  onFilter = (filterName,filterStatus) =>{
    filterStatus = parseInt(filterStatus,10);
    this.setState({
      filter:{
        name : filterName.toLowerCase(),
        status : filterStatus
      }
    });
  };
  onSearch = (keyword) =>{
    this.setState({
      keyword : keyword
    })
  };
  onSort =(sort)=>{
    this.setState({
      sort:{
        Name:sort.Name,
        By:sort.By
      }
    });
  };
  render() {
    var { Tasks, isDisplayForm, TaskEditing ,filter,keyword,sort} = this.state;
    if(filter){
      if(filter.name){
        Tasks = Tasks.filter((task)=>{
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        })
      }
      if(filter.status){
        Tasks = Tasks.filter((task)=>{
        if(filter.status === -1){
          return task;
        }else{
          return task.status === filter.status;
        }
      })
      }
    }
    if(keyword){
      Tasks = Tasks.filter((task)=>{
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      })
    }
    if(sort.Name==="name"){
       Tasks.sort((a,b)=>{
        if(a.name>b.name) {
          return sort.By;
        }
        else if(a.name<b.name) {
          return -sort.By;
        }
        else {
          return 0;
        }
      });
    }else{
      Tasks.sort((a,b)=>{
        if(a.status>b.status) {
          return sort.By;
        }
        else if(a.status<b.status) {
          return -sort.By;
        }
        else {
          return 0;
        }
      });
    }
    var elmFormAdd = isDisplayForm ? (
      <TaskAdd
        onSubmit={this.onSubmitParent}
        onClose={this.onCloseForm}
        task={TaskEditing}
      ></TaskAdd>
    ) : (
      ""
    );
    return (
      <div className="App container">
        <div className="row">
          <h1>Todo List</h1>
        </div>
        <div className="row">
          <div className={isDisplayForm ? "col-3" : ""}>
            {/* form add */}
            {elmFormAdd}
          </div>
          <div className={isDisplayForm ? "col-7" : "col-12"}>
            {/* search + list */}
            <div className="card" style={{ border: "0px" }}>
              <div className="card-body" style={{ paddingTop: "0px" }}>
                <div className="card-title">
                  {/* add  */}
                  <button
                    type="button"
                    className="btn btn-info"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.onToggleForm}
                  >
                    Task New
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary ml-2"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={this.onGenerate}
                  >
                    Generate Task
                  </button>
                </div>
                <div className="card-text">
                  {/* Search Sort */}
                  <TaskControl onSearch={this.onSearch} onSort={this.onSort}
                   sortName = {this.state.sort.Name}
                   sortby={this.state.sort.By}></TaskControl>

                  {/* List Task */}
                  <TaskList
                    Tasks={Tasks}
                    onUpdStatus1={this.onUpdStatus}
                    onEdit1={this.onEdit}
                    onDelete1={this.onDelete}
                    onFilter={this.onFilter}
                  ></TaskList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
