import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, total }) => {
  const getAll = () => {
    return good + neutral + bad;
  };

  const getAverage = () => {
    if (getAll() === 0) return "No feedback given";
    return total / getAll();
  };

  const getPositive = () => {
    if (getAll() === 0) return "No feedback given";
    return (good / getAll()) * 100 + " %";
  };

  if (getAll() === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <tbody>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="average" value={getAverage()} />
      <StatisticLine text="positive" value={getPositive()} />
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

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
      <Button handleClick={() => handleClick(good, setGood, 1)} text="good" />
      <Button
        handleClick={() => handleClick(neutral, setNeutral, 0)}
        text="neutral"
      />
      <Button handleClick={() => handleClick(bad, setBad, -1)} text="bad" />
      <h1>statistics</h1>
      <Statistics total={total} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
