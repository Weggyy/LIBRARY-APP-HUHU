import { useState } from "react"
import data from '../data/booksData.json'
import LibraryBooks from "./LibraryBooks";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [isSearch, setSearch] = useState(false);

  const handleSearch = () => {
    setSearch(true);
  }
  const filteredBooks = data.filter(book => 
    book.title.toLowerCase().includes(input.toLowerCase()));
  
    

  return (
    <div>
      <h1>Search Bar</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {isSearch && filteredBooks.map(book => (
        <div>
          <h1>{book.title}</h1>
          <h3>{book.author}</h3>
          <p>{book.genre}</p>
        </div>
      ))}
    </div>
  );
}