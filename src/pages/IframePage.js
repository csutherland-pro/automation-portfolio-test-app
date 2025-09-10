import React from "react";

export default function IframePage() {
  return (
    <div>
      <h2>Iframe Page</h2>
      <iframe
        title="demo"
        srcDoc="<p>Hello from inside an iframe!</p>"
        width="300"
        height="100"
        style={{ border: "1px solid black" }}
      />
    </div>
  );
}
