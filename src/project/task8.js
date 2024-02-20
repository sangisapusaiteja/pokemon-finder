import React, { useState, useEffect } from "react";

const Task9 = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => setUsers(data.users))
      .catch(error => console.error('Error:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const items = users.map(list => (
    <div key={list.id} className="flex justify-around mb-4">
      <div className="bg-purple-500 h-100 w-52 p-6 rounded-lg text-white ">
        <img src={list.image} alt="img" className="h-32 w-full " />
        <div className="bg-black px-2 rounded-lg"><p >{`ID: ${list.id}`}</p>
        <p >{`First Name: ${list.firstName}`}</p>
        <p >{`Last Name: ${list.lastName}`}</p>
        <p >{`Maiden Name: ${list.maidenName}`}</p>
        <p >{`Age: ${list.age}`}</p>
        <p >{`Gender: ${list.gender}`}</p>
        <p >{`Email: ${list.email}`}</p>
        <p >{`Phone: ${list.phone}`}</p>
        </div></div>
    </div>
  ));

  return (
    <div className="bg-black p-10">
      <div className="flex flex-wrap justify-around mb-4">
        {items}
      </div>
    </div>
  );
}

export default Task9;
