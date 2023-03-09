import data from '../data/booksData.json'

export default function LibraryBooks() {

  return (
    <div>
      <h2>Library</h2>
      {data.map((book) => (
        <div>
          <hr />
          <h1 style={{color: "red"}}>Title: {book.title}</h1>
          <h3>Author: {book.author}</h3>
          <p>Genre: {book.genre}</p>
        </div>
      ))};
    </div>
  );
}