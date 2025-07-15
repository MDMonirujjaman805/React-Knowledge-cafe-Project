import "./App.css";
import Header from "./Componentens/Header/Header";
import Blogs from "./Componentens/Blogs/Blogs";
import Bookmarks from "./Componentens/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const handleAddToBookmark = (blog) => {
    // setBookmarks([...bookmarks,blog])
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-11/12 mx-auto pt-5 gap-3">
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>

        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
