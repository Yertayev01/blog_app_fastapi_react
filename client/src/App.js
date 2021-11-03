import React, { useState } from "react";

import Nav from "./components/Nav";
import Login from "./components/Login";

function App() {
  const [users, setUsers] = useState([]);

  const renderUserList = () => {
    return users.map((user) => {
      return (
        <>
          <p>id: {user.id}</p>
          <p>email: {user.email}</p>
        </>
      );
    });
  };

  return (
    <main className="font-sans	min-h-screen border flex flex-col justify-center">
      <Nav />
      <Login setUsers={setUsers} />
      {renderUserList()}
    </main>
  );
}

export default App;
