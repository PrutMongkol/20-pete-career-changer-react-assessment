import { useState } from "react";

function CreateUserForm({ employees, setEmployees }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!name.trim()) {
      errors.name = "Name can't be empty.";
      isValid = false;
    }

    if (!lastname.trim()) {
      errors.lastname = "Lastname can't be empty.";
      isValid = false;
    }

    if (!position.trim()) {
      errors.position = "Position can't be empty.";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleCreate = (nextName, nextLastname, nextPosition) => {

    if (validateForm()) {
      setEmployees([
        ...employees,
        {
          id: crypto.randomUUID(),
          name: nextName,
          lastname: nextLastname,
          position: nextPosition,
        },
      ]);
      setName("");
      setLastname("");
      setPosition("");
    }
  };

  return (
    <div className="grid my-10">
      <div className="place-self-center">
        <h2 className="text-xl font-bold py-4 mx-4">Create User Here</h2>
        <form className="flex flex-row" onSubmit={(e) => {
          e.preventDefault();
          handleCreate(name, lastname, position)}}>
          <div className="flex flex-col">
            <input
              className="p-2 mx-4 my-2 rounded"
              type="text"
              name="name"
              placeholder="Name"
              id="name"
              value={name}
              aria-label="name"
              onChange={(e) => setName(e.target.value)}
            />
            <p className="mx-4 text-sm text-red-500">{formErrors.name}</p>
          </div>
          <div className="flex flex-col">
            <input
              className="p-2 mx-4 my-2 rounded"
              type="text"
              name="lastname"
              placeholder="Last Name"
              id="lastname"
              value={lastname}
              aria-label="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
            <p className="mx-4 text-sm text-red-500">{formErrors.lastname}</p>
          </div>
          <div className="flex flex-col">
            <input
              className="p-2 mx-4 my-2 rounded"
              type="text"
              name="position"
              placeholder="Position"
              id="position"
              value={position}
              aria-label="position"
              onChange={(e) => setPosition(e.target.value)}
            />
            <p className="mx-4 text-sm text-red-500">{formErrors.position}</p>
          </div>
          <button
            type="submit"
            className="py-2 px-6 mx-4 my-2 rounded bg-indigo-500 text-white"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

function AdminTable({ employees, setEmployees }) {
  const handleDelete = (id) => {
    let nextEmployees = [...employees];
    nextEmployees = nextEmployees.filter((e) => e.id !== id);
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
