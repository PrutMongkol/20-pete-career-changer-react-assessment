function CreateUserForm() {
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
        />
        <input
          className="p-2 mx-4 my-2 rounded"
          type="text"
          name="lastname"
          placeholder="Last Name"
          id="name"
          aria-label="name"
        />
        <input
          className="p-2 mx-4 my-2 rounded"
          type="text"
          name="position"
          placeholder="Position"
          id="name"
          aria-label="name"
        />
        <button className="py-2 px-6 mx-4 my-2 rounded bg-indigo-500 text-white">Save</button>
      </div>
    </div>
  );
}

function AdminTable() {
  return (
    <div className="grid pt-8">
      <table className="place-self-center table-auto border-2 border-slate-400 ">
        <thead className="bg-slate-400 *:min-w-32">
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </thead>
        <tbody className="bg-slate-50 text-center">
          <tr className="even:bg-slate-200">
            <td>Mock Name</td>
            <td>Mock Last Name</td>
            <td>Mock Position</td>
            <td>
              <button className="text-red-600 px-8 ">Delete</button>
            </td>
          </tr>
          <tr className="even:bg-slate-200">
            <td>Mock Name</td>
            <td>Mock Last Name</td>
            <td>Mock Position</td>
            <td>
              <button className="text-red-600 px-8 ">Delete</button>
            </td>
          </tr>
          <tr className="even:bg-slate-200">
            <td>Mock Name</td>
            <td>Mock Last Name</td>
            <td>Mock Position</td>
            <td>
              <button className="text-red-600 px-8 ">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default function Admin() {
  return (
    <>
      <CreateUserForm />
      <AdminTable />
    </>
  );
}