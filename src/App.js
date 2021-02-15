import { useState, useLayoutEffect, useEffect } from "react";
import "./App.scss";
import Card from "./Components/Card";
import Button from "./Components/Button";
import story from "./story.json";

function App() {
  const [current, setCurrent] = useState(0);
  const data = [...Object.values(story)];

  function handleCallback() {
    setCurrent(current => current + 1);
  }

  return (
    <div className="App">
      {data && <Card data={data[current]} />}
      {current < data.length - 1 && (
        <Button current={current} callback={handleCallback} />
      )}
    </div>
  );
}

export default App;
