import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex bg-slate-600">
        <Sidebar />
        <Homepage />
      </div>
    </>
  );
}

export default App;
