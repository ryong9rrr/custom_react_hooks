import { useState, useEffect } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  const titleUpdator = useTitle("Loading...");
  setTimeout(() => titleUpdator("Home"), 5000);
  return (
    <div className="App">
      <h1>useTitle</h1>
    </div>
  );
}
