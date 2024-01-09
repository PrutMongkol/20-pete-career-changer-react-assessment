export default function User() {
  return (
    <div className="grid pt-8">
      <table className="place-self-center table-auto border-2 border-slate-400 ">
        <thead className="bg-slate-400">
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </thead>
        <tbody className="bg-slate-50">
          <tr className="even:bg-slate-200">
            <td>Mock Name</td>
            <td>Mock Last Name</td>
            <td>Mock Position</td>
          </tr>
          <tr className="even:bg-slate-200">
            <td>Mock Name</td>
            <td>Mock Last Name</td>
            <td>Mock Position</td>
          </tr>
          <tr className="even:bg-slate-200">
            <td>Mock Name</td>
            <td>Mock Last Name</td>
            <td>Mock Position</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
