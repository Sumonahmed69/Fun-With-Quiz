import React from 'react';
import Header from '../Header/Header';
import QuizSetting from '../QuizSetting/QuizSetting';

const Home = ({name, setName, fetchQuestions}) => {
    return (
        <main style={{overflowX: 'hidden'}}>
            <Header></Header>
            <QuizSetting name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
            >

            </QuizSetting>
        </main>
    );
};

export default Home;