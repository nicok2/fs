import { useState } from "react";

const Statistics = (props) => {
  const getAll = () => {
    return props.good + props.neutral + props.bad;
  };

  const getAverage = () => {
    if (getAll() === 0) return "No feedback given";
    return props.total / getAll();
  };

  const getPositive = () => {
    if (getAll() === 0) return "No feedback given";
    return (props.good / getAll()) * 100;
  };



  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {getAll()}</p>
      <p>average {getAverage()}</p>
      <p>positive {getPositive()}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (value, setter, points) => {
    setter(value + 1);
    setTotal(total + points);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick(good, setGood, 1)}>good</button>
      <button onClick={() => handleClick(neutral, setNeutral, 0)}>
        neutral
      </button>
      <button onClick={() => handleClick(bad, setBad, -1)}>bad</button>
      <Statistics total={total} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
