import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-tittle">
          <h2>MY CONTACT</h2>
        </div>
        <ul className="option-sidebar">
          <Link to="/register">Create Contact</Link>
          <Link to="#">Create Address</Link>
          <Link to="/">Logout</Link>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
