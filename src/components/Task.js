import React, {Component} from 'react';
import './Task.css';
class Task extends Component{

    render()
    {
        return(<div className="task-container">
            <div className="date-container">
                 <h4>{this.props.d.day+" "+this.props.d.month}</h4>
            </div>
            <div className=" data-container">
                <p style={{letterSpacing:'0.8px',textAlign:'left',fontWeight:'bold'}}>{this.props.d.title}</p>
                <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                    <p style={{float:'left',width:'45%'}}>{this.props.d.startHr+this.props.d.startAM+" to "+this.props.d.endHr+this.props.d.endAM}</p>
                    <p style={{float:'left',textAlign:'right',width:'50%'}}>{this.props.d.participants+" participants"}</p>

                </div>
            </div>
           
        </div>)
    }
}
export default Task;