import React, {Component} from 'react';
import './CreateTask1.css';
class CreateTask1 extends Component{

    render()
    {
        return(
        <div className="task1-container">
            
                 <p>Title</p>
                 <input style={{width:'100%',fontSize:'20px',minHeight:"50%"}} onChange={(event)=>this.props.addTitle(event.target.value)}></input>
                 <p>Date</p>
            
            <div className="data1-container">
                
            <div style={{width:'15%'}}>
                <p style={{color:'gray'}}>Day</p>
                <input style={{width:'100%',fontSize:'20px',minHeight:"40%"}} onChange={(event)=>this.props.addDay(event.target.value)}></input>
            </div>
            <div style={{width:'15%',marginLeft:'10%'}}>
                <p style={{color:'gray'}}>Month</p>
                <input style={{width:'100%',fontSize:'20px',minHeight:"40%"}} onChange={(event)=>this.props.addMonth(event.target.value)}></input>
            </div>
            <div style={{width:'15%',marginLeft:'10%'}}>
                <p style={{color:'gray'}}>Year</p>
                <input style={{width:'100%',fontSize:'20px',minHeight:"40%"}} onChange={(event)=>this.props.addYear(event.target.value)}></input>
            </div>
                
            </div>
           
        </div>)
    }
}
export default CreateTask1;