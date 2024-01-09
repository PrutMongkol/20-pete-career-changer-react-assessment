import axios from "axios";
import { useState } from "react";

export default function User({ employees, reload, setReload }) {
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  const handleSelect = async (id) => {
    //TODO
  };

  return (
    <div className="grid pt-8">
      <table className="place-self-center table-auto border-2 border-slate-400 ">
        <thead className="bg-slate-400">
          <tr className="*:min-w-32">
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody className="bg-slate-50 text-center">
          {employees.map((e) => {
            return (
              <tr className="even:bg-slate-200" key={e.id}>
                <td>{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.position}</td>
                {/* <td>
                  <button 
                    className="text-green-600 px-8"
                    onClick={(e) => handleSelect(e.id)}
                    >Select</button>
                </td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <h2 className="text-xl font-bold text-center pt-8 pb-2">Selected Employees</h2>
      <table className="place-self-center table-auto border-2 border-slate-400 ">
        <thead className="bg-slate-400">
          <tr className="*:min-w-32">
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 text-center">
          {selectedEmployees.map((e) => {
            return (
              <tr className="even:bg-slate-200" key={e.id}>
                <td>{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
}
