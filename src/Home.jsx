import { useState } from 'react';

import Layout from "./Layout";
import User from "./User";
import Admin from "./Admin"

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  const [sector, setSector] = useState("admin") // "", "user", "admin"

  let content
  switch (sector) {
    case "user":
      content = <User />;
      break;
    case "admin":
      content = <Admin />;
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
        <button>User Home Sector</button>
        <button>Admin Home Sector</button>
      </div>
      {content}
    </Layout>
  );
};

export default Home;
