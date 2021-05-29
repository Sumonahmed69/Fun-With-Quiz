import axios from "axios";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
    
  };


  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Home
            name={name}
            setName={setName}
            fetchQuestions={fetchQuestions}
          />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="/quiz">
          <Quiz 
          name={name}
          questions={questions}
          score={score}
          setScore={setScore}
          setQuestions={setQuestions}
          />
        </Route>

        <Route path="/result">
            <Result name={name} score={score} />
          </Route>


      </Switch>
    </Router>
  );
}

export default App;
