import React, { Component } from "react";
import "./Schedules.css";
import Task from "./Task";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const FETCH_SCHEDULE = gql`
  query  {
    Schedules {
      day
      endAM
      endHr
      endMin
      month
      participants
      startAM
      startHr
      startMin
      title
      year
    }
  }
`;

const Schedule =  () => {
    
  const { loading, error, data } = useQuery(FETCH_SCHEDULE);
  let items= data
  let tasks
  if(loading)
  {
     
      console.log("loading...")
  }
  if(error)
  console.log("error!")
 
  if(data)
  {
    tasks=data.Schedules.map((i, key) => (
        <Task d={i} key={key}></Task>
      ))

  }
    
        
    

  
  

  return (
      
    <div className="schedules">
      <div className="header">
        <h2>Schedules</h2>
      </div>
      <div className="schedule-container">
        <div
          onClick={() => (window.location.href = "/step1")}
          style={{
            width: "26%",
            minHeight:'30px',
            marginLeft: "70%",
            marginTop: "1%",
            marginRight: "4%",
            textAlign: "center",
            backgroundColor: "#183e7d",
            borderRadius: "5px",
            
          }}
        >
          <Link
            style={{
              color: "orange",
              textDecoration: "none",
              fontWeight: "bolder",
              fontSize: "20px",
              
              
            }}
            to="/step1"
          >
            Create Schedule
          </Link>
        </div>
        {tasks}
      </div>
    </div>
  );
};
export default Schedule;
