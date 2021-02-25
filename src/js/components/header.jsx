import React, { useState } from "react";

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Reciept Generator
          </a>
          {/* <a className="btn btn-light" aria-current="page" href="#">
            Transactions
          </a> */}
          <form className="d-flex">
            <input
              className="form-control form-control-lg me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={props.title}
              onChange={(e) => {
                props.setTitle(e);
              }}
            />
          </form>
        </div>
      </nav>
    </>
  );
}
