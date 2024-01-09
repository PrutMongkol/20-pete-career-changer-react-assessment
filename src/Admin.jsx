import { useState } from "react";

function CreateUserForm({ employees, setEmployees }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const handleCreate = (nextName, nextLastname, nextPosition) => {
    setEmployees([
      ...employees,
      {
        id: crypto.randomUUID(),
        name: nextName,
        lastname: nextLastname,
        position: nextPosition,
      },
    ]);
  };

  return (
    <div className="grid my-10">
      <div className="place-self-center">
        <h2 className="text-xl font-bold py-4 mx-4">Create User Here</h2>
        <input
          className="p-2 mx-4 my-2 rounded"
          type="text"
          name="name"
          placeholder="Name"
          id="name"
          aria-label="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="p-2 mx-4 my-2 rounded"
          type="text"
          name="lastname"
          placeholder="Last Name"
          id="name"
          aria-label="lastname"
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          className="p-2 mx-4 my-2 rounded"
          type="text"
          name="position"
          placeholder="Position"
          id="name"
          aria-label="position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <button
          className="py-2 px-6 mx-4 my-2 rounded bg-indigo-500 text-white"
          onClick={(e) => handleCreate(name, lastname, position)}
        >
          Save
        </button>
      </div>
    </div>
  );
}

function AdminTable({ employees, setEmployees }) {
 
  const handleDelete = (id) => {
    let nextEmployees = [...employees];
    nextEmployees = nextEmployees.filter(e => e.id !== id)
    setEmployees(nextEmployees);
  };

  return (
    <div className="grid pt-8">
      <table className="place-self-center table-auto border-2 border-slate-400 ">
        <thead className="bg-slate-400 *:min-w-32">
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 text-center">
          {employees.map((e) => {
            return (
              <tr className="even:bg-slate-200" key={e.id}>
                <td>{e.name}</td>
                <td>{e.lastname}</td>
                <td>{e.position}</td>
                <td>
                  <button 
                    className="text-red-600 px-8" 
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default function Admin({ employees, setEmployees }) {
  return (
    <>
      <CreateUserForm employees={employees} setEmployees={setEmployees} />
      <AdminTable employees={employees} setEmployees={setEmployees} />
    </>
  );
}
