import { useState, useEffect } from 'react';
import axios from 'axios';

import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin"

// const mockEmployees = [
//   {
//     id: 0,
//     name: "mock",
//     lastname: "mocklastname",
//     position: "Manager",
//   },
//   {
//     id: 1,
//     name: "employee 1",
//     lastname: "em",
//     position: "Engineer",
//   },
//   {
//     id: 2,
//     name: "employee 2",
//     lastname: "lord",
//     position: "Designer",
//   },
// ];

const Home = () => {
  const [sector, setSector] = useState("") // "", "user", "admin"
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");

      if (response.status === 200 && response.data) {
        setEmployees([...response.data]);
      }
    }

    getData();
  }, [reload]);

  let content
  switch (sector) {
    case "user":
      content = <User employees={employees} reload={reload} setReload={setReload} />;
      break;
    case "admin":
      content = <Admin employees={employees} reload={reload} setReload={setReload} />;
      break;
    case "":
    default:
      content = <></>;
      break;
  }

  return (
    <Layout>
      <h1 className="text-4xl font-bold text-center my-10">
        Generation Thailand
        <br />
        React - Assessment
      </h1>
      <div className="flex gap-28 justify-center *:bg-white *:p-3 *:font-bold *:drop-shadow-lg *:rounded">
        <button value="user" onClick={(e) => setSector(e.target.value)}>User Home Sector</button>
        <button value="admin" onClick={(e) => setSector(e.target.value)}>Admin Home Sector</button>
      </div>
      {content}
    </Layout>
  );
};

export default Home;
