import "./App.css";
import Header from "./Componentens/Header/Header";
import Blogs from "./Componentens/Blogs/Blogs";
import Bookmarks from "./Componentens/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-11/12 mx-auto">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
