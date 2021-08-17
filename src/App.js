import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    setTimeout(() => setCount(0), 5000)
  }, []);

  useEffect(() => {
    document.title = text
  }, [text]);

  useEffect(() => {
    console.log("useEffect called")
    
  }, [count]);
  console.log("Component rendering");

  return( 
    <div>
      <button 
      onClick={() => setCount((count) => count + 1)}>
        I've been clicked {count} times and I'm cool with that
      </button>
      <input 
      type="text"
      placeholder="Type away..."
      value={text}
      onChange={(e) => setText(e.target.value)}
      />
      </div>
  )
}

export default App;
