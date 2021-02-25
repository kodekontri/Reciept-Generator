import React from "react";
import Slip_Item from "./slip_item";

export default function Slip(props) {
  return (
    <div
      className="card mx-auto bg-lighter px-3 pb-2"
      style={{ minWidth: "300px" }}>
      <h3 className="text-center fw-lighter text-success">
        <i className="material-icons display-4">check_circle</i>
        Withdrawals Sent
      </h3>
      <div
        className="card-body text-center bg-white transaction-slip"
        label={props.label}>
        <p className="text-start lead">
          Bitcoin worth $
          {props.transactions.reduce((a, b) => a + Number(b.amount), 0)} has
          been successfully sent from your account.
        </p>
        <p className="text-end">
          Transaction ID:{" "}
          {(Math.floor(Math.random() * 10000) + 90000).toString().slice(0, 4)}
        </p>
        <h4 className="lead">Transaction Details</h4>
        <ul className="list-group">
          {props.transactions.map((transaction, index) => (
            <Slip_Item key={index} transaction={transaction} />
          ))}
        </ul>
      </div>
      <button className="btn btn-success mt-3">Print</button>
    </div>
  );
}
