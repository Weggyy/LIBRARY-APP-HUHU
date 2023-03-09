import { useState } from "react"
import data from '../data/booksData.json'


export function LibraryBooks() {
  const [isFilter, setFilter] = useState(false);
  const [input, setInput] = useState("");

  const filteredBooks = data.filter(book =>
    book.title.toLowerCase().includes(input.toLowerCase()));

  const handleSearch = () => {
    setFilter(true);
  }

  return (
    <div>
      <h2>Library</h2>
      <h1>Search Bar</h1>
      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {isFilter && filteredBooks.map(book => (
        <div>
        <hr />
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.genre}</p>
        </div>
      ))}

    </div>
  );
}