import React, { useState } from "react";
import { render } from "react-dom";
import Header from "./components/header.jsx";
import Transaction_From from "./components/transaction_form.jsx";
import Slip from "./components/slip.jsx";
import "../sass/style.scss";

function App() {
  const rt = localStorage.getItem("rt");
  const [transaction, setTransaction] = useState([]);
  const [label, setLabel] = useState(rt ? rt : "Reciept Title");

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    const { amount, desc, date, wallet } = formData;
    setTransaction((prevState) => [
      ...prevState,
      {
        amount: formData.get("amount"),
        desc: formData.get("desc"),
        date: formData.get("date"),
        wallet: formData.get("wallet"),
      },
    ]);
  }

  function setTitle(e) {
    localStorage.setItem("rt", e.target.value);
    setLabel(() => e.target.value);
  }

  return (
    <div>
      <Header title={label} setTitle={setTitle} />
      <div className="container">
        <div className="row">
          <div className="col-7 mt-4">
            <Transaction_From handleSubmit={handleSubmit} />
          </div>
          <div className="col-5 mt-4">
            <Slip transactions={transaction} label={label} />
          </div>
        </div>
      </div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
