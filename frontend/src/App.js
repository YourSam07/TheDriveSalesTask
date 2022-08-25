import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Main from './components/Main'

function App() {
  return (
    <div className="App min-h- font-poppins ">
      <Navbar />
      <div className="section flex">
        <div className="bg-white shadow-md w-[18%] h-[680px]">
          <Sidebar />
        </div>
        <div className="p-8 w-[82%] h-[680px]">
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
