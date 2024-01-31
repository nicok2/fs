import { useState } from "react";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = (value, setter, points) => {
    setter(value + 1);
    setTotal(total + points);
  };

  const getAll = () => {
    return good + neutral + bad;
  };

  const getAverage = () => {
    if (getAll() === 0) return "No feedback given";
    return total / getAll();
  };

  const getPositive = () => {
    if (getAll() === 0) return "No feedback given";
    return (good / getAll()) * 100;
  };

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick(good, setGood, 1)}>good</button>
      <button onClick={() => handleClick(neutral, setNeutral, 0)}>
        neutral
      </button>
      <button onClick={() => handleClick(bad, setBad, -1)}>bad</button>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {getAll()}</p>
      <p>average {getAverage()}</p>
      <p>positive {getPositive()}%</p>
    </div>
  );
};

export default App;
