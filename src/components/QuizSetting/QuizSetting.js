import React, { useState } from 'react';
import { useHistory } from "react-router";
import quiz from '../../images/quiz.jpg';
import TextField from '@material-ui/core/TextField';
import './QuizSetting.css';
import { Button, MenuItem } from '@material-ui/core';
import Categories from '../../Data/Categories';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

const QuizSetting = ({ name, setName, fetchQuestions }) => {
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
        if (!category || !difficulty || !name) {
            setError(true);
           
            return;
        } else {
            setError(false);
            fetchQuestions(category, difficulty);
            history.push("/quiz");

        }
        
    };

    return (
        <div className='row flex-md-row-reverse'>
            <div className="col-md-6 " style={{textAlign: "center", margin: "auto"}}>
                <img style={{ width: '400px' }} src={quiz} alt="" />
            </div>
            <div className=" mt-3 col-md-5 settings-select "  style={{textAlign: "center", margin: "auto"}}>

                <h1 className='mb-4'>Your Quiz Catagory</h1>
                {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}

                <TextField id="outlined-basic" label="Enter your name"
                    variant="outlined" className='mb-4'
                    onChange={(e) => setName(e.target.value)}
                />

                <TextField select label="Select category"
                    variant="outlined" className='mb-4'
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {
                        Categories.map((cat) => (

                            <MenuItem key={cat.category} value={cat.value}>
                                {cat.category}
                            </MenuItem>

                        ))

                    }


                </TextField>

                <TextField select label="Select Difficulty"

                    variant="outlined" className='mb-4'
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                >
                    <MenuItem key="Easy" value="easy">
                        Easy
            </MenuItem>
                    <MenuItem key="Medium" value="medium">
                        Medium
            </MenuItem>
                    <MenuItem key="Hard" value="hard">
                        Hard
            </MenuItem>
                </TextField>
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                    Start Quiz
                </Button>



            </div>

        </div>
    );
};

export default QuizSetting;