import React, { useState } from "react";
import "./Schedules.css";
import CreateTask2 from "./CreateTask2";

import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

import gql from "graphql-tag";

const INSERT_SCHEDULE = gql`
  mutation(
    $startHr: Int
    $startMin: Int
    $startAM: String
    $endHr: Int
    $endMin: Int
    $endAM: String
    $title: String!
    $day: Int
    $month: String
    $year: Int
    $participants:Int
  ) {
    insert_Schedules_one(
      object: {
        day: $day
        endAM: $endAM
        endHr: $endHr
        endMin: $endMin
        month: $month
        startAM: $startAM
        startHr: $startHr
        startMin: $startMin
        title: $title
        year: $year
        participants:$participants
      }
      on_conflict: {
        constraint: Schedules_pkey
        update_columns: participants
        where: { title: { _eq: $title } }
      }
    ) {
      participants
    }
  }
`;



const CreateSchedule2 = (props) => {
  const [startHr, setStartHr] = useState();
  const [startMin, setStartMin] = useState();
  const [startAM, setStartAM] = useState();
  const [endHr, setEndHr] = useState();
  const [endMin, setEndMin] = useState();
  const [endAM, setEndAM] = useState();
  
  const [insertSchedule] = useMutation(INSERT_SCHEDULE);

  function addTime(input) {
    if (input.type === "startHr") setStartHr(input.data);
    else if (input.type === "startMin") setStartMin(input.data);
    else if (input.type === "startAM") setStartAM(input.data);
    else if (input.type === "endHr") setEndHr(input.data);
    else if (input.type === "endMin") setEndMin(input.data);
    else if (input.type === "endAM") setEndAM(input.data);
  }
  const submit=()=> {
 

      insertSchedule({
        variables: {
          title: props.location.state.title,
          day: props.location.state.day,
          month: props.location.state.month,
          year: props.location.state.year,
          startHr: startHr,
          startMin: startMin,
          startAM: startAM,
          endHr: endHr,
          endMin: endMin,
          endAM: endAM,
          participants:1
        },
      });

    }
    
   
  

  return (
    <div className="schedules">
      <div className="header">
        <h2>New Schedule - Step 2</h2>
      </div>
      <div className="schedule-container">
        <div
          onClick={() => {
            submit();
          }}
          style={{
            width: "25%",
            marginLeft: "50%",
            marginTop: "1%",
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
            to="/"
          >
            Create
          </Link>
        </div>

        <CreateTask2 addData={addTime}></CreateTask2>
      </div>
    </div>
  );
};

export default withRouter(CreateSchedule2);
