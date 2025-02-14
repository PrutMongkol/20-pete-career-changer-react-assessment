import axios from "axios";
import { useState } from "react";

export default function User({ employees, reload, setReload }) {
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  return (
    <div className="grid pt-8">
      <table className="place-self-center table-auto border-2 border-slate-400 ">
        <thead className="bg-slate-400">
          <tr className="*:min-w-32">
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 text-center">
          {employees.map((e) => {
            return (
              <tr className="even:bg-slate-200" key={e.id}>
                <td>{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
