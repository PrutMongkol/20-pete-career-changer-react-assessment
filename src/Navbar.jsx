export default function Navbar() {
  return (
    <ul className="flex justify-end px-4 py-4 text-lg font-bold border-b-2 border-gray-50 *:px-4 ">
      <li>
        <a className="py-4" href="/">Home</a>
      </li>
      <li>
        <a className="py-4" href="/owner">Owner</a>
      </li>
    </ul>
  );
}
