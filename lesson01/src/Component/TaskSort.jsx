import React, { Component } from "react";

class TaskSort extends Component {
  constructor(props) {
    super(props);
    this.state={
      sort:{
        Name:"",
        By:0
      }
    }
  }
  
  onSort(sortName,sortBy){
    
    this.setState({
      sort : {
        Name:sortName,
        By:sortBy
      }
    },() => {
      this.props.onSort(this.state.sort);
  });;

    
  }
  render() {
    var {sort} = this.state;
    return (
      
         <div className="btn-group">
         <button type="button" class="btn btn-primary dropdown-toggle" 
         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Sort
         </button>
         <div className="dropdown-menu">
           <a className={ (this.props.sortName ==="name" && this.props.sortby === 1)? "dropdown-item active" : "dropdown-item"} href="#"
           onClick={()=>this.onSort("name",1)}>Name A->Z</a>
           <a className={ (this.props.sortName ==="name" && this.props.sortby === -1)? "dropdown-item active" : "dropdown-item"} href="#"
            onClick={()=>this.onSort("name",-1)}>Name Z->A</a>
           <div className="dropdown-divider"></div>
           <a className={ (this.props.sortName ==="status" && this.props.sortby === 1)? "dropdown-item active" : "dropdown-item"} href="#"
            onClick={()=>this.onSort("status",1)}>Hidden Status </a>
           <a className={ (this.props.sortName ==="status" && this.props.sortby === -1)? "dropdown-item active" : "dropdown-item"} href="#"
            onClick={()=>this.onSort("status",-1)}>Active Status </a>
         </div>
       </div>            
                 
      );
  }
}
export default TaskSort;