import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
      <Header></Header>
      <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
