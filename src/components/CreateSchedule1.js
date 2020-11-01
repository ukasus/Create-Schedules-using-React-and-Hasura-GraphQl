import React,{Component} from 'react';
import './Schedules.css';
import CreateTask1 from './CreateTask1'

import {Link} from 'react-router-dom'
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


class CreateSchedule1 extends Component
{
   
    constructor(props)
    {

        super(props);
        this.state={
            title:null,
            day: null,
            month: null,
            year: null,
        }
       this.addTitle=this.addTitle.bind(this)
       this.addDay=this.addDay.bind(this)
       this.addMonth=this.addMonth.bind(this)
       this.addYear=this.addYear.bind(this)

    }
    addTitle(t)
    {
        this.setState({
            
            title:t,
            
        })
        

    }
    addDay(d)
    {
        this.setState({
            
            day:d
        })
        

    }
    addMonth(m)
    {
        this.setState({
            
           month:m
        })
        

    }
    addYear(y)
    {
        this.setState({
            
            year:y
        })
        

    }
    render()
    {
        //console.log(this.state.title,this.state.day,this.state.month,this.state.year)
        //console.log(this.props)
        return(
            <div className='schedules'>
              <div className="header">
                  <h2>New Schedule - Step 1</h2>
              </div>
              <div className='schedule-container'>
                  <div style={{width:'25%',marginLeft:'50%',marginTop:'1%',textAlign:'center',backgroundColor:'#183e7d',borderRadius:'5px'}} >
                  <Link style={{color:'orange',textDecoration:'none',fontWeight:'bolder',fontSize:'20px'}}
                  to={
                      {
                        pathname:'/step2',
                        state:     {
                            title:this.state.title,
                            day:this.state.day,
                            month:this.state.month,
                            year:this.state.year
                        }

                      }
                      
                  }
                  >Next</Link>
                  </div>
                  
                  <CreateTask1 addTitle={this.addTitle} addDay={this.addDay} addMonth={this.addMonth} addYear={this.addYear}></CreateTask1>

              </div>

            </div>
        )
    }
}
export default CreateSchedule1;