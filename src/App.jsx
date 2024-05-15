import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CreatePost from "./Components/CreatePost";
import PostList from "./Components/PostList";

function App() {
  return (
    <div className="app-container">
      <Sidebar></Sidebar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
