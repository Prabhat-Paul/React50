import React from "react";
import  { useEffect, useState } from "react";

const UserList = () => {
  const [user, setUser] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getUserdata();
    setLoader(true);
  }, []);

  async function getUserdata() {
    const url = "http://localhost:3000/users";
    let res = await fetch(url);
    res = await res.json();
    // console.log(res);
    setUser(res);
    setLoader(false);
  }
  return (
    <>
      {!loader ? (
        user.map(({ name, id, age, email }) => (
          <div key={id}>
            <li className="userList">
              Name: {name} &nbsp; Age:{age} &nbsp; Email:{email}
            </li>
            <br />
          </div>
        ))
      ) : (
        <div>
          <li
            style={{ border: "1px solid", padding: "5px", fontWeight: "bold" }}
          >
            Name &nbsp; &nbsp; Age: Email:
          </li>

          <br />
        </div>
      )}
    </>
  );
};

export default UserList;
