import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Question from '../Question/Question';
import './Quiz.css';

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {

    const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);


    useEffect(() => {
        setOptions(
            questions &&
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        );
    }, [currQues, questions]);



    const handleShuffle = (options) => {
        return options.sort(() => Math.random() - 0.5);
    };


    return (
        <div>
            <Header></Header>
            <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo container">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>


        </div>
    );
};

export default Quiz;