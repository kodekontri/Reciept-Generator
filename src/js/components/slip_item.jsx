import React from "react";

export default function SlipItem(props) {
  const { amount, date, wallet, desc } = props.transaction;
  return (
    <li className="list-group-item d-flex">
      <div>
        <i className="material-icons small">send</i>
      </div>
      <div className="w-100 ms-3">
        <div className="d-flex justify-content-between">
          <div className="small">Sent</div>
          <div className="small">${amount}</div>
          <div className="text-uppercase small truncate">{wallet}</div>
        </div>
        <div className="d-flex justify-content-between">
          <p>Description</p>
          <p>{desc}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-muted">Date</p>
          <p>{date}</p>
        </div>
      </div>
    </li>
  );
}
