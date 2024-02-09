import * as React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
          <li><Link to="/feed">Load Feed Page</Link></li>
          <li><Link to="/community">Load Group Page</Link></li>
      </ul>
    </div>
  );
}