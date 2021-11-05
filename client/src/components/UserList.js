import React, { useState, useEffect } from "react";
import { easyFetch } from "./utils/easyFetch";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/users";
    easyFetch.get(url).then((data) => {
      setUsers([...data]);
    });
  }, []);

  return (
    <div className="mt-10 pt-20 p-5 lg:p-20 border grid lg:grid-cols-2 gap-8">
      {users.map((user) => {
        return (
          <div
            key={user.email}
            className="bg-green-50 rounded-md border-l-2 shadow text-green-700 p-10 px-10 lg:h-80 lg:w-80"
          >
            <p>
              id: <span className="text-indigo-300">{user.id}</span>
            </p>
            <p>
              email: <span className="text-indigo-300">{user.email}</span>
            </p>
            {user.items && (
              <>
                <h4>items:</h4>
                <div className="bg-white border divide-y-2 pr-2 divide-green-150 mt-2 rounded flex flex-col h-40 overflow-auto">
                  {user.items.map((item) => {
                    return (
                      <div className="bg-white rounded-lg p-4 text-sm">
                        <h4>title: {item.title}</h4>
                        <p>description: {item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
