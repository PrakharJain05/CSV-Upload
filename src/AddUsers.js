import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { readString } from "react-papaparse";
import firebase from "./firebase";

export const AddUsers = () => {
  const [users, setUsers] = useState([]);

  let fileReader = {};

  const handleFileRead = (e) => {
    const content = fileReader.result;
    var results = readString(content, {
      header: true,
    });
    setUsers(results.data);
  };

  const handleLoad = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  const handleClick = () => {
    users.map((user) => firebase.firestore().collection("users").add(user));
    return setUsers([]);
  };

  return (
    <div className="add_user">
      <div className="title">
        <Link to="/">
          <button>
            <h4>{"< "}Go Back</h4>
          </button>
        </Link>
        <h1>Upload File</h1>
      </div>
      <div className="input">
        <input
          type="file"
          accept=".csv"
          id="file"
          onChange={(e) => handleLoad(e.target.files[0])}
        />
      </div>
      <div className="csv_list">
        <table>
          <tbody>
            {users.map((user) => (
              <tr key={uuidv4()}>
                <td key={uuidv4()} style={{ padding: 20 }}>
                  {user.Username}
                </td>
                <td key={uuidv4()} style={{ padding: 20 }}>
                  {user.Contact}
                </td>
                <td key={uuidv4()} style={{ padding: 20 }}>
                  {user.ID}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="import">
        {users[1] && <button onClick={() => handleClick()}>Import</button>}
      </div>
    </div>
  );
};
