import React, { useState } from "react";
import { render } from "react-dom";

function App() {
  return (
    <div>
      <h1>Reciept Generator</h1>
      <div>
        <form>
          <div className="input-group">
            <input type="text" id="amount" placeholder="Amount" />
          </div>
          <div className="input-group">
            <input type="text" id="wallet" placeholder="Wallet" />
          </div>
          <div className="input-group">
            <input type="date" id="date" placeholder="Dare" />
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
