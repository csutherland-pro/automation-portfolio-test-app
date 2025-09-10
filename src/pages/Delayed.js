import React, { useEffect, useState } from "react";

export default function Delayed() {
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("Loaded after delay!");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Delayed Page</h2>
      <p>{text || "Loading..."}</p>
    </div>
  );
}
