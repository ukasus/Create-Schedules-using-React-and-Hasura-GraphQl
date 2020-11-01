import React, { Component } from "react";
import "./CreateTask1.css";
class CreateTask2 extends Component {
  render() {
    return (
      <div className="task1-container">
        <p>Start Time</p>

       

        <div className="data1-container">
          <div style={{ width: "15%" }}>
            <p style={{ color: "gray" }}>Hr</p>
            <input style={{ width: "100%",fontSize:'20px',minHeight:"40%" }} onChange={(event)=>this.props.addData({type:'startHr',
        data:event.target.value})}></input>
          </div>
          <div style={{ width: "15%", marginLeft: "10%" }}>
            <p style={{ color: "gray" }}>Min</p>
            <input style={{ width: "100%",fontSize:'20px',minHeight:"40%" }} onChange={(event)=>this.props.addData({type:'startMin',
        data:event.target.value})}></input>
          </div>
          <div style={{ width: "15%", marginLeft: "10%" }}>
            <p style={{ color: "gray" }}>AM/PM</p>
            <input style={{ width: "100%",fontSize:'20px',minHeight:"40%"}} onChange={(event)=>this.props.addData({type:'startAM',
        data:event.target.value})}></input>
          </div>
        </div>
        <p>End Time</p>

        <div className="data1-container">
          <div style={{ width: "15%" }}>
            <p style={{ color: "gray" }}>Hr</p>
            <input style={{ width: "100%",fontSize:'20px',minHeight:"40%" }} onChange={(event)=>this.props.addData({type:'endHr',
        data:event.target.value})}></input>
          </div>
          <div style={{ width: "15%", marginLeft: "10%" }}>
            <p style={{ color: "gray" }}>Min</p>
            <input style={{ width: "100%",fontSize:'20px',minHeight:"40%"}} onChange={(event)=>this.props.addData({type:'endMin',
        data:event.target.value})}></input>
          </div>
          <div style={{ width: "15%", marginLeft: "10%" }}>
            <p style={{ color: "gray" }}>AM/PM</p>
            <input style={{ width: "100%",fontSize:'20px',minHeight:"40%"}} onChange={(event)=>this.props.addData({type:'endAM',
        data:event.target.value})}></input>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateTask2;
