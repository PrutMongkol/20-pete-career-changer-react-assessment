import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 h-[100svh]">
      <Navbar />
      <div className="m-4">
        {children}
      </div>
    </div>
  );
}
