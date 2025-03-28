import { useState } from "react";
import Counter from "./Counter";

function App() {
  const [counts, setCounts] = useState([1, 4, 3]);

  const updateCount = (index, delta) => {
    const newCounts = [...counts];
    newCounts[index] = Math.min(10, Math.max(0, newCounts[index] + delta)); // Enforce range 0-10
    setCounts(newCounts);
  };

  const resetCounts = () => setCounts(new Array(counts.length).fill(0));

  const addCounter = () => setCounts([...counts, 0]);

  const removeCounter = (index) => {
    const newCounts = counts.filter((_, i) => i !== index);
    setCounts(newCounts);
  };

  const totalCount = counts.reduce((acc, value) => acc + value, 0);

  return (
    <div className="App">
      <h1>Total Count: {totalCount}</h1>
      <button onClick={resetCounts}>Reset All</button>
      <button onClick={addCounter}>➕ Add Counter</button>
      {counts.map((value, index) => (
        <Counter
          key={index}
          label={`Counter ${index + 1}`}
          value={value}
          increment={() => updateCount(index, 1)}
          decrement={() => updateCount(index, -1)}
          remove={() => removeCounter(index)} // Pass remove function
        />
      ))}
    </div>
  );
}

export default App;
