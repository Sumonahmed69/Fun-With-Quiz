import React from 'react';
import { Button } from "@material-ui/core";
import { useEffect } from "react";
import { useHistory } from "react-router";
import "./Result.css";
import win from '../../images/quiz-win.jpg';
const Result = ({ name, score }) => {
    const history = useHistory();
  
    useEffect(() => {
      if (!name) {
        history.push("/");
      }
    }, [name, history]);
  
    return (
      <div >

          
          <div className="result">

        <span className="title fw-bolder">Final Score : {score}</span>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          style={{ alignSelf: "center", marginTop: 20 }}
          href="/"
        >
          Go to homepage
        </Button>
        <img className="win-img" src={win} alt="" />
        </div>
       
      </div>
    );
  };

export default Result;