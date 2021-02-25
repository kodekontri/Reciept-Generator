import React, { useState } from "react";

export default function App(props) {
  const [data, setData] = useState({
    amount: "",
    wallet: "",
    date: "",
    desc: "",
  });

  function handleChange(e) {
    setData((prevData) => {
      let d = { ...prevData };
      d[e.target.name] = e.target.value;
      return d;
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(e);
    setData(() => ({
      amount: "",
      wallet: "",
      date: "",
      desc: "",
    }));
  }

  const { amount, date, wallet, desc } = data;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 mx-auto">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Add New Transaction</h2>
                <form onSubmit={handleSubmit} name="tform">
                  <div className="mb-3">
                    <input
                      type="text"
                      name="amount"
                      placeholder="Amount"
                      value={amount}
                      required="required"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="wallet"
                      placeholder="Wallet"
                      value={wallet}
                      required="required"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="date"
                      name="date"
                      placeholder="Date"
                      value={date}
                      required="required"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="desc"
                      cols="30"
                      rows="10"
                      placeholder="Description"
                      value={desc}
                      required="required"
                      className="form-control"
                      onChange={handleChange}></textarea>
                  </div>
                  <button className="btn btn-primary d-block mx-auto w-100">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
