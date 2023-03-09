import { useState } from "react";
import { LibraryBooks }from "./components/MainContent";

function App() {
  const [isSearched, setSearched] = useState(true);

  return (
    <div>
      <h1>ReactRead: A Book Searcher</h1>
      <LibraryBooks />
    </div>
  );
}

export default App
