import React from "react";

export default function Component() {
  return (
    <div>
      <input id="one" />
      <input tabIndex={-1} id="two" />
      <button id="three">click</button>
      <input id="four" />
    </div>
  );
}
