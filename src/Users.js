import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .orderBy("Username")
      .onSnapshot((snapshot) => {
        let allTasks = snapshot.docs.map((doc) => ({
          docId: doc.id,
          ...doc.data(),
        }));
        setUsers(allTasks);
      });
  }, []);
  return (
    <div>
      <div className="header">
        <div className="header_heading">
          <h1>USERS</h1>
        </div>
        <div className="header_addcsv">
          <Link to="./addUsers">
            <button>ADD USERS</button>
          </Link>
        </div>
      </div>
      <div className="list">
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
    </div>
  );
};
