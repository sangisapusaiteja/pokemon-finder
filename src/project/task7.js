
import { useState, useEffect } from "react";
export default function Task7() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return <h1>I have rendered {count} times!</h1>;
  
  
}