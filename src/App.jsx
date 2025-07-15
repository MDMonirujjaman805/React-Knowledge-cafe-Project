import "./App.css";
import Header from "./Componentens/Header/Header";
import Blogs from "./Componentens/Blogs/Blogs";
import Bookmarks from "./Componentens/Bookmarks/Bookmarks";
import { useState } from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };
  const handleMarkTime = (time) => {
    setReadTime(readTime + time);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-11/12 mx-auto pt-5 gap-3">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleMarkTime={handleMarkTime}
        ></Blogs>

        <Bookmarks bookmarks={bookmarks} readTime={readTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
